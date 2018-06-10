# coding=utf-8
class MzProductSearchParams(object):

    ORDER_MODE_ID_DESC = 1
    ISDEL = 0

    def __init__(self, request):
        self.isdel = request.get_argument("isdel", MzProductSearchParams.ISDEL)

    def to_url_params(self):
        s = ""
        return s
