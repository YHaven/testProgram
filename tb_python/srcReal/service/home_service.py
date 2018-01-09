# coding=utf-8
from model.models import MzOrder
from model.models import MzProduct
from . import BaseService
from datetime import datetime

class HomeService(object):

    @staticmethod
    def get_order(db_session, expressNumber_,printTime_):
        return db_session.query(MzOrder).filter(MzOrder.printTime_ == printTime_,MzOrder.expressNumber_ == expressNumber_).first()
    
    @staticmethod
    def page_order(db_session, pager, search_params):
        query = db_session.query(MzOrder)
        count = None
        if search_params:
            if search_params.printTime:
                count = None
                query = query.filter(MzOrder.printTime_ >= search_params.printTime)
        pager = BaseService.query_pager(query, pager, count)
        # if pager.result:
            # if search_params.show_comments_count:
            #     result = []
            #     for order, comments_count in pager.result:
            #         order.fetch_comments_count(comments_count if comments_count else 0)
            #         result.append(order)
            #     pager.result = result
        return pager


    @staticmethod
    def get_order_by_id(db_session, order_id):
        order = db_session.query(MzOrder).get(order_id)
        return order

    @staticmethod
    def update_order(db_session, order_id, order_to_update):
        count = 0
        if order_to_update:
            if "id" in order_to_update:
                order_to_update.remove("id")
            count = db_session.query(MzOrder).filter(MzOrder.id == order_id).update(order_to_update)
            if count:
                db_session.commit()
        return count

    @staticmethod
    def delete_order(db_session, order_id):
        count = db_session.query(MzOrder).filter(MzOrder.id == order_id).delete()
        if count:
            db_session.commit()
        return count

    @staticmethod
    def save_order(db_session, order):
        
        if(order['expressPrice'] != None):
            order['expressPrice'] = float(order['expressPrice'])
        else:
            order['expressPrice'] = 0
        if(order['weight'] != None):
            order['weight'] = float(order['weight'])
        else:
            order['weight'] = 0
        if(order['orderPrice'] != None):
            order['orderPrice'] = float(order['orderPrice'])
        else:
            order['orderPrice'] = 0
        if(order['printTime'] != None):
            order['printTime'] = datetime.strptime(order['printTime'], "%Y-%m-%d %H:%M:%S")
        else:
            order['printTime'] = None
        
        order_to_save = MzOrder(
            consignee_ = order['consignee'],
            phone_ = order['phone'],
            provinceName_ = order['provinceName'],
            address_ = order['address'],
            orderInfo_ = order['orderInfo'],
            express_ = order['express'],
            expressNumber_ = order['expressNumber'],
            expressPrice_ = order['expressPrice'],
            weight_ = order['weight'],
            # orderTime_ = order['orderTime'],
            printTime_ = order['printTime'],
            userMark_ = order['userMark'],
            orderPrice_ = order['orderPrice'],
        )
        db_session.add(order_to_save)
        
        return order_to_save



    @staticmethod
    def get_product_by_id(db_session, product_id):
        product = db_session.query(MzProduct).get(product_id)
        return product

    @staticmethod
    def save_product(db_session, product):
        print product['picture']
        if(product['price'] != None):
            product['price'] = float(product['price'])
        else:
            product['price'] = 0
        print '111111'
        product_to_save = MzProduct(
            productName_ = product['productName'],
            className_ = product['className'],
            otherName_ = product['otherName'],
            price_ = product['price'],
            status_ = 0,
            picture_ = product['picture'],
        )
        print product['picture']
        db_session.add(product_to_save)
        db_session.commit()
        return product_to_save

    @staticmethod
    def update_product(db_session, oproduct_id, product_to_update):
        count = 0
        if product_to_update:
            if "id" in product_to_update:
                product_to_update.remove("id")
            count = db_session.query(MzProduct).filter(MzProduct.id == product_id).update(product_to_update)
            if count:
                db_session.commit()
        return count

    @staticmethod
    def delete_product(db_session, product_id):
        count = db_session.query(MzProduct).filter(MzProduct.id == product_id).delete()
        if count:
            db_session.commit()
        return count