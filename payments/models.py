from django.db import models

# Create your models here.
PAYMENT_REQUEST_CHOICES = (
    ("pending", "Pending"),
    ("approved", "Approved"),
    ("declined", "Declined"),
    ("paid", "Paid")
)

class PaymentRequest(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE)
    amount_requested = models.IntegerField(default=0)
    amount_awarded = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    approved_by_hr = models.BooleanField(default=False)
    approved_by_admin = models.BooleanField(default=False)
    decline_reason = models.TextField(null=True)
    redeem_link = models.URLField(null=True)
    description = models.TextField(null=True)
    status = models.CharField(max_length=255, choices=PAYMENT_REQUEST_CHOICES, default="pending")

    def __str__(self):
        return self.user.username


class MomoCode(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    provider = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Bank(models.Model):
    bank_id = models.IntegerField()
    bank_code = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    def __str__(self):
        return self.name