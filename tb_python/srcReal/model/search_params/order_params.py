# coding=utf-8
class OrderSearchParams(object):

    ORDER_MODE_ID_DESC = 1

    def __init__(self, request):
        self.source_id = request.get_argument("source_id", None)

    def to_url_params(self):
        s = ""
        if self.source_id:
            s = "source_id={0}".format(self.source_id)
        return s
