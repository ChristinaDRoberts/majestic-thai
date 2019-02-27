from rest_framework.viewsets import ModelViewSet

from .models import Order, OrderItem
from .serializers import OrdersSerializer, OrderItemSerializer


class OrdersViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer


class OrderItemViewSer(ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer