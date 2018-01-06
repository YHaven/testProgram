# coding=utf-8
import json
import logging

import tornado.gen

from config import site_cache_keys
from config import config

logger = logging.getLogger(__name__)

"""
初始化相关，包括缓存管理
"""


class SiteCacheService(object):
    """SiteCache缓存策略
    站点缓存，加快访问速度，尤其是首页显示的相关数据,该类字段做二级缓存，本地缓存-redis缓存
    查询策略:先查本地缓存，未命中查询redis缓存，还未命中查询数据库，并将结果逐级更新
    更新策略:数据写入数据库后，更新redis缓存，并通过发布对应字段的更新消息通知所有节点更新本地缓存
    缓存校准:mater节点，设置定时任务，在访问较少的时间段校准redis缓存,并通知所有节点更新
    """

"""
刷新所有缓存，从数据库重建缓存并通知其他节点，用于定时任务校准缓存
"""
@tornado.gen.coroutine
def flush_all_cache():
    application = config['application']
    thread_do = application.thread_executor.submit
    db = application.db_pool()
    cache_manager = application.cache_manager
    pubsub_manager = application.pubsub_manager
    yield cache_manager.call("DEL", *get_all_site_cache_keys())
    yield SiteCacheService.query_all(cache_manager, thread_do, db, True, pubsub_manager)
