from django.urls import path

from payments.views import (RedeemProcessorAPIView, approve_payment_request,
                            decline_payment_request, home, mobile_money_payout,
                            payment_request, payment_requests,
                            resubmit_request)

urlpatterns = [
    path("", home, name="home"),
    path("payment-requests/", payment_requests, name="payment-requests"),
    path("request-payment/", payment_request, name="request-payment"),
    path("mobile-money-payout/", mobile_money_payout, name="mobile-money-payout"),
    path("approve-payment-request/<int:id>/", approve_payment_request, name="approve-payment-request"),
    path("decline-payment-request/<int:id>/", decline_payment_request, name="decline-payment-request"),
    path("resubmit-request/<int:id>/", resubmit_request, name="resubmit-request"),
    path("redeem-process/", RedeemProcessorAPIView.as_view(), name="redeem-process"),
]