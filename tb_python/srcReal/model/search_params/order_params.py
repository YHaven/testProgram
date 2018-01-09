# coding=utf-8
class OrderSearchParams(object):

    ORDER_MODE_ID_DESC = 1

    def __init__(self, request):
        self.printTime = request.get_argument("printTime", None)

    def to_url_params(self):
        s = ""
        return s