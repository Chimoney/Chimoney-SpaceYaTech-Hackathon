from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.urls import reverse

# Create your models here.
ROLE_CHOICES = (
    ("admin", "Admin"),
    ("hr", "Hr Admin"),
    ("employee", "Employee"),
)

class User(AbstractUser):
    role = models.CharField(choices=ROLE_CHOICES, max_length=32, null=True)
    phone_number = models.CharField(max_length=255, null=True)
    id_number = models.CharField(max_length=255, null=True)
    position = models.CharField(max_length=255)
    gender = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.username

    def name(self):
        return f"{self.first_name} {self.last_name}"