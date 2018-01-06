# coding=utf-8
"""init_v1_0

Revision ID: 753ec9bc0d27
Revises: 
Create Date: 2017-03-12 20:17:20.958379

"""
from alembic import op
import sqlalchemy as sa
from model.constants import Constants

# revision identifiers, used by Alembic.
revision = '1.0.0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('mz_user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userName_', sa.String(length=64), nullable=True),
    sa.Column('password_', sa.String(length=128), nullable=True),
    sa.Column('createDate_', sa.DateTime(), nullable=True),
    sa.Column('removeDate_', sa.DateTime(), nullable=True),
    sa.Column('status_', sa.Integer(), nullable=True),
    sa.Column('email_', sa.String(length=64), nullable=True),
    
    sa.PrimaryKeyConstraint('id')
    )

    op.create_table('mz_order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('createDate_', sa.DateTime(), nullable=True),
    sa.Column('removeDate_', sa.DateTime(), nullable=True),
    sa.Column('status_', sa.Integer(), nullable=True),
    sa.Column('consignee_', sa.String(length=128), nullable=True),
    sa.Column('phone_', sa.String(length=128), nullable=True),
    sa.Column('tel_', sa.String(length=128), nullable=True),
    sa.Column('provinceName_', sa.String(length=128), nullable=True),
    sa.Column('address_', sa.String(length=255), nullable=True),
    sa.Column('orderInfo_', sa.String(length=255), nullable=True),
    sa.Column('express_', sa.String(length=128), nullable=True),
    sa.Column('expressNumber_', sa.String(length=128), nullable=True),

    sa.Column('expressPrice_', sa.Float(), nullable=True),
    sa.Column('weight_', sa.Float(), nullable=True),
    sa.Column('orderTime_', sa.DateTime(), nullable=True),
    sa.Column('payTime_', sa.DateTime(), nullable=True),
    sa.Column('sendTime_', sa.DateTime(), nullable=True),
    sa.Column('printTime_', sa.DateTime(), nullable=True),
    sa.Column('userMark_', sa.String(length=255), nullable=True),
    sa.Column('products_', sa.String(length=255), nullable=True),
    sa.Column('expressPrice_', sa.Float(), nullable=True),
    sa.Column('orderPrice_', sa.Float(), nullable=True),
    sa.Column('user_', sa.Integer(), nullable=True),

    
    sa.PrimaryKeyConstraint('id')
    )

    op.create_table('mz_product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('className_', sa.String(length=255), nullable=True),
    sa.Column('productName_', sa.String(length=255), nullable=True),
    sa.Column('otherName_',sa.String(length=255), nullable=True),
    sa.Column('price_', sa.Float(), nullable=True),
    sa.Column('picture_', sa.String(length=255), nullable=True),
    sa.Column('createDate_', sa.DateTime(), nullable=True),
    sa.Column('removeDate_', sa.DateTime(), nullable=True),
    
    sa.PrimaryKeyConstraint('id')
    )

    
def downgrade():
    op.drop_table('mz_user')
    op.drop_table('mz_order')
    op.drop_table('mz_product')
