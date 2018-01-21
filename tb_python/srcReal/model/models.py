# coding: utf-8
from datetime import datetime
from model.constants import Constants
from sqlalchemy.orm import contains_eager, deferred
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, DateTime, Integer, String, Boolean, Text, ForeignKey, BigInteger, DATE,Float
from sqlalchemy.orm import relationship, backref
DbBase = declarative_base()


class DbInit(object):
    createDate_ = Column(DateTime, default=datetime.now)


class MzOrder(DbBase,DbInit):
    __tablename__ = 'mz_order'
    id = Column(Integer, primary_key=True)
    removeDate_ = Column(DateTime)
    status_ = Column(Integer, default=0, nullable=False)
    consignee_ = Column(String(128))
    phone_ = Column(String(128))
    provinceName_ = Column(String(128))
    address_ = Column(String(255))
    orderInfo_ = Column(String(255))
    express_ = Column(String(128))
    expressNumber_ = Column(String(128))
    expressPrice_ = Column(Float(11))
    weight_ = Column(Float(11))
    orderTime_ = Column(DateTime)
    payTime_ = Column(DateTime)
    sendTime_ = Column(DateTime)
    printTime_ = Column(DateTime)
    userMark_ = Column(String(255))
    products_ = Column(String(255))
    orderPrice_ = Column(Float(11))
    checkPrice_ = Column(Float(11))
    user_ = Column(Integer)


class MzProduct(DbBase,DbInit):
    __tablename__ = 'mz_product'
    id = Column(Integer, primary_key=True)
    removeDate_ = Column(DateTime)
    className_ = Column(String(255))
    status_ = Column(Integer, default=0, nullable=False)
    productName_ = Column(String(255))
    otherName_ = Column(String(255))
    price_ = Column(Float(11))
    picture_ = Column(String(255))

class User(DbBase,DbInit):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    email = Column(String(64), unique=True, index=True)
    username = Column(String(64), unique=True, index=True)
    password = Column(String(128))

    def verify_password(self, password):
        return self.password == password

