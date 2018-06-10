# coding=utf-8
import os
import sys
from tornado import gen
from tornado.web import authenticated
import tornado.escape 

from base import BaseHandler
from model.pager import Pager
from model.constants import Constants
from model.search_params.mz_product_params import MzProductSearchParams
from service.mz_product_service import MzProductService

reload(sys)   
sys.setdefaultencoding('utf8')

class ProductList(BaseHandler):
    @authenticated
    @gen.coroutine
    def get(self):
        pager = Pager(self)
        base_url = self.reverse_url('productList')
        product_search_params = MzProductSearchParams(self)
        pager = yield self.async_do(MzProductService.page_mz_product, self.db, pager, product_search_params)

        self.render("mzproduct/productList.html", base_url=base_url,pager=pager,order_search_params=product_search_params)