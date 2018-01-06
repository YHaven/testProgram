# coding=utf-8
import hashlib
import urllib

import datetime
import tornado.web
from tornado import gen
from tornado.escape import url_escape

from config import session_keys, config, cookie_keys
# from extends.session_tornadis import Session
from model.logined_user import LoginUser


class BaseHandler(tornado.web.RequestHandler):

    def initialize(self):
        self.session = None
        self.db_session = None
        self.session_save_tag = False
        self.session_expire_time = 604800  # 7*24*60*60秒
        self.thread_executor = self.application.thread_executor
        self.cache_manager = self.application.cache_manager
        self.async_do = self.thread_executor.submit

    def login_url(self):
        return self.get_login_url()+"?next="+url_escape(self.request.uri)

    @gen.coroutine
    def init_session(self):
        if not self.session:
            self.session = Session(self)
            yield self.session.init_fetch()

    def save_session(self):
        self.session_save_tag = True
        self.session.generate_session_id()

    @property
    def db(self):
        if not self.db_session:
            self.db_session = self.application.db_pool()
        return self.db_session

    @property
    def pubsub_manager(self):
        return self.application.pubsub_manager


    def logout(self):
        if session_keys['login_user'] in self.session:
            del self.session[session_keys['login_user']]
            self.save_session()
        self.current_user = None


    def write_json(self, json):
        self.set_header("Content-Type", "application/json; charset=UTF-8")
        self.write(json)

    def write_error(self, status_code, **kwargs):
        if not config['debug']:
            if status_code == 403:
                self.render("403.html")
            elif status_code == 404 or 405:
                self.render("404.html")
            elif status_code == 500:
                self.render("500.html")
        if not self._finished:
            super(BaseHandler, self).write_error(status_code, **kwargs)


    @gen.coroutine
    def on_finish(self):
        if self.db_session:
            self.db_session.close()
            # print "db_info:", self.application.db_pool.kw['bind'].pool.status()
        if self.session is not None and self.session_save_tag:
            yield self.session.save(self.session_expire_time)

