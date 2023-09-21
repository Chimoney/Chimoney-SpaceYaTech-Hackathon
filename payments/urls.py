from django.urls import path
from payments.views import (
    home, payment_requests, payment_request, mobile_money_payout,
    approve_payment_request, decline_payment_request
)


urlpatterns = [
    path("", home, name="home"),
    path("payment-requests/", payment_requests, name="payment-requests"),
    path("request-payment/", payment_request, name="request-payment"),
    path("mobile-money-payout/", mobile_money_payout, name="mobile-money-payout"),
    path("approve-payment-request/<int:id>/", approve_payment_request, name="approve-payment-request"),
    path("decline-payment-request/<int:id>/", decline_payment_request, name="decline-payment-request"),
]