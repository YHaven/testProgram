# coding=utf-8
from model.models import MzOrder
from datetime import datetime

class HomeService(object):

    @staticmethod
    def get_order(db_session, expressNumber_,printTime_):
        return db_session.query(MzOrder).filter(MzOrder.printTime_ == printTime_,MzOrder.expressNumber_ == expressNumber_).first()


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