from django.db import models

# Create your models here.

from django.db import models

class Orders(models.Model):

    STATUS_UNASSIGNED = 'unassigned'
    STATUS_OPEN = 'open'
    STATUS_COMPLETED = 'completed'

    STATUS_CHOICES = (
        (STATUS_UNASSIGNED, 'Unassigned'),
        (STATUS_OPEN, 'Open'),
        (STATUS_COMPLETED, 'Completed'),
    )


    #
    #
    # NAME_CHOICES = (
    #     (PAD_THAI, "Pad Thai"),
    #      KHAO_PAD, 'Khao Pad'),
    #      GAENG_DAENG, 'Gaeng Daeng'),
    #      TOM_YUM_GOONG, 'Tom Yum Goong'),
    #
    # )

    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default=STATUS_UNASSIGNED)
    name = models.CharField(max_length=255)
    price = models.IntegerField(default=5)

