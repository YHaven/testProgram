# coding=utf-8
class ProductSearchParams(object):

    ORDER_MODE_ID_DESC = 1

    def __init__(self, request):
        self.removeDate = request.get_argument("removeDate", None)

    def to_url_params(self):
        s = ""
        return s
