from django.contrib import admin
from django.urls import path

from .api import OrdersViewSet

urlpatterns = [
    path('api/orders/', OrdersViewSet.as_view({
       'get': 'list',
       'post': 'create',
    }), name='order_api'),
]