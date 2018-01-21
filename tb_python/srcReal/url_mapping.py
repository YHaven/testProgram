# coding=utf-8
import controller.home
from tornado.web import url


# url映射
handlers = [
    url(r"/", controller.home.HomeHandler, name="index"),
    url(r"/auth/login", controller.home.LoginHandler, name="login"),
    url(r"/auth/logout", controller.home.LogoutHandler, name="logout"),
    url(r"/file/upload", controller.home.FileUpload, name="upload"),
    url(r"/product/add", controller.home.ProductAdd, name="productAdd"),
    url(r"/product/remove", controller.home.ProductRemove, name="productRemove"),
    url(r"/product/list", controller.home.ProductList, name="productList"),
    url(r"/product/list/byorder", controller.home.ProductListByOrder, name="productListByOrder"),
    url(r"/order/check/price", controller.home.OrderCheckPrice, name="orderCheckPrice"),
]