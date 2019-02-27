from rest_framework import serializers

from .models import Order, OrderItem


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        # fields = ('id', 'status', 'name', 'message')
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"

