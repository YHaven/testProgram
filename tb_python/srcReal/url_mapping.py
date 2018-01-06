# coding=utf-8
import controller.home
from tornado.web import url


# url映射
handlers = [
    url(r"/", controller.home.HomeHandler, name="index"),
    url(r"/auth/login", controller.home.LoginHandler, name="login"),
    url(r"/auth/logout", controller.home.LogoutHandler, name="logout"),
    url(r"/file/upload", controller.home.FileUpload, name="upload"),

]