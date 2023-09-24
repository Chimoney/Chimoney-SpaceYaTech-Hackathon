from django.contrib import admin
from payments.models import PaymentRequest
# Register your models here.
@admin.register(PaymentRequest)
class PaymentRequestAdmin(admin.ModelAdmin):
    list_display = ["user", "amount_requested", "amount_awarded", "approved_by_hr", "redeem_link"]