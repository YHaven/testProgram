# coding=utf-8
import controller.home
import controller.admin
import controller.admin_custom
import controller.admin_article_type
import controller.admin_article
import controller.super
import controller.product
import controller.mz_product
from tornado.web import url


# url映射
handlers = [
    url(r"/", controller.home.HomeHandler, name="index"),
    url(r"/auth/login", controller.home.LoginHandler, name="login"),
    url(r"/auth/logout", controller.home.LogoutHandler, name="logout"),
    # articleSource
    url(r"/source/([0-9]+)/articles", controller.home.articleSourceHandler, name="articleSource"),
    # articleType
    url(r"/type/([0-9]+)/articles", controller.home.ArticleTypeHandler, name="articleType"),
    # article
    url(r"/article/([0-9]+)", controller.home.ArticleHandler, name="article"),
    url(r"/article/([0-9]+)/comment", controller.home.ArticleCommentHandler, name="articleComment"),
    # admin
    url(r"/admin/account", controller.admin.AdminAccountHandler, name="admin.account"),
    url(r"/admin/help", controller.admin.AdminHelpHandler, name="admin.help"),
    url(r"/admin/account/(change-password|edit-user-info)",
        controller.admin.AdminAccountHandler, name="admin.account.update"),
    # admin.custom
    url(r"/admin/custom/blog-info",
        controller.admin_custom.AdminCustomBlogInfoHandler, name="admin.custom.blog_info"),
    url(r"/admin/custom/blog-plugin",
        controller.admin_custom.AdminCustomBlogPluginHandler, name="admin.custom.blog_plugin"),
    url(r"/admin/custom/blog-plugin/(add)",
        controller.admin_custom.AdminCustomBlogPluginHandler, name="admin.custom.plugin.action"),
    url(r"/admin/custom/blog-plugin/([0-9]+)/(sort-down|sort-up|disable|enable|edit|delete)",
        controller.admin_custom.AdminCustomBlogPluginHandler, name="admin.custom.plugin.update"),
    # admin.article_type
    url(r"/admin/articleType", controller.admin_article_type.AdminArticleTypeHandler, name="admin.articleTypes"),
    url(r"/admin/articleType/(add)",
        controller.admin_article_type.AdminArticleTypeHandler, name="admin.articleType.action"),
    url(r"/admin/articleType/([0-9]+)/(delete|update)",
        controller.admin_article_type.AdminArticleTypeHandler, name="admin.articleType.update"),
    # admin.article_type_nav (menu)
    url(r"/admin/articleType/nav",
        controller.admin_article_type.AdminArticleTypeNavHandler, name="admin.articleTypeNavs"),
    url(r"/admin/articleType/nav/(add)",
        controller.admin_article_type.AdminArticleTypeNavHandler, name="admin.articleTypeNav.action"),
    url(r"/admin/articleType/nav/([0-9]+)/(sort-down|sort-up|delete|update)",
        controller.admin_article_type.AdminArticleTypeNavHandler, name="admin.articleTypeNav.update"),
    # admin.article
    url(r"/admin/article/(submit)", controller.admin_article.AdminArticleHandler, name="admin.article.action"),
    url(r"/admin/article", controller.admin_article.AdminArticleHandler, name="admin.articles"),
    url(r"/admin/article/([0-9]+)", controller.admin_article.AdminArticleHandler, name="admin.article"),
    url(r"/admin/article/([0-9]+)/(delete)", controller.admin_article.AdminArticleHandler, name="admin.article.update"),

    url(r"/admin/comment", controller.admin_article.AdminArticleCommentHandler, name="admin.comments"),
    url(r"/admin/article/([0-9]+)/comment/([0-9]+)/(disable|enable|delete)",
        controller.admin_article.AdminArticleCommentHandler, name="admin.comment.update"),
    # super.init
    url(r"/super/init", controller.super.SuperHandler, name="super.init"),

    # 米尊系统
    url(r"/order/index", controller.product.OrderHandler, name="order.index"),
    # url(r"/file/upload", controller.product.FileUpload, name="upload"),
    # url(r"/product/add", controller.product.ProductAdd, name="productAdd"),
    # url(r"/product/remove", controller.product.ProductRemove, name="productRemove"),
    # url(r"/product/list", controller.product.ProductList, name="productList"),
    # url(r"/product/list/byorder", controller.product.ProductListByOrder, name="productListByOrder"),
    # url(r"/order/check/price", controller.product.OrderCheckPrice, name="orderCheckPrice"),
    url(r"/product/list", controller.mz_product.ProductList, name="productList"),
]