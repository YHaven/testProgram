from model.models import MzProductInfo
from . import BaseService
from datetime import datetime
import logging
logger = logging.getLogger(__name__)

class MzProductService(object):
    @staticmethod
    def page_mz_product(db_session, pager, search_params):
        query = db_session.query(MzProductInfo).order_by(MzProductInfo.id.desc())
        query = query.filter(MzProductInfo.isdel == 0)
        count = 0
        if search_params:
            if search_params.isdel:
                count = 0
        pager = BaseService.query_pager(query, pager, count)
        return pager