from django.db import models

# Create your models here.

from django.db import models

class OrderItem(models.Model):
        name = models.CharField(max_length=255)
        price = models.IntegerField(default=5)
        # quantity = models.IntegerField(default=1)

        def __str__(self):
            return str(self.name)




class Order(models.Model):
    dateCreated = models.DateTimeField(auto_now_add=True)
    items = models.ManyToManyField(OrderItem)

