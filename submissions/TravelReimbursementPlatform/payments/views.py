import requests
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from rest_framework import generics, status
from rest_framework.response import Response

from payments.models import MomoCode, PaymentRequest

from .mobile_payout import make_mobile_money_payout
from .serializers import RedeemSerializer


# Create your views here.
class RedeemProcessorAPIView(generics.CreateAPIView):
    serializer_class = RedeemSerializer

    def post(self, request):
        data = request.data
        print(data)

        serializer = self.serializer_class(data=data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required(login_url="/users/login")
def home(request):
    user = request.user

    payment_requests = PaymentRequest.objects.all()
    momo_codes = MomoCode.objects.all()

    if not user.is_superuser:
        payment_requests = PaymentRequest.objects.filter(user=user)


    context = {
        "payment_requests": payment_requests,
        "momo_codes": momo_codes
    }
    return render(request, "home.html", context)


@login_required(login_url="/users/login")
def payment_requests(request):
    user = request.user

    payment_requests = PaymentRequest.objects.all()
    momo_codes = MomoCode.objects.all()

    if not user.is_superuser:
        payment_requests = PaymentRequest.objects.filter(user=user)


    context = {
        "payment_requests": payment_requests,
        "momo_codes": momo_codes
    }
    return render(request, "payments/payment_requests.html", context)


@login_required(login_url="/users/login")
def payment_request(request):
    user = request.user
    if request.method == "POST":
        amount_requested = request.POST.get("amount_requested")
        description = request.POST.get("description")

        payment_request = PaymentRequest.objects.create(
            amount_requested=amount_requested,
            description=description,
            user=user
        )

        return redirect("payment-requests")

    return render(request, "modals/request_payment.html")



def approve_payment_request(request, id=None):
    payment_request = PaymentRequest.objects.get(id=id)
    payment_request.status = "approved"
    payment_request.save()
    return redirect("payment-requests")


def decline_payment_request(request, id=None):
    payment_request = PaymentRequest.objects.get(id=id)
    payment_request.status = "declined"
    payment_request.save()
    return redirect("payment-requests")


def mobile_money_payout(request):
    if request.method == "POST":
        amount = int(request.POST.get("amount"))
        email = request.POST.get("email")
        phone_number = request.POST.get("phone_number")
        payment_id = int(request.POST.get("payment_id"))

        print(f"Payment: {payment_id}, Email: {email}, Amount: {amount}, Phone Number: {phone_number}")

        try:
            payout_link = make_mobile_money_payout(email, phone_number, amount)
            payment = PaymentRequest.objects.get(id=payment_id)
            payment.status = "paid"
            payment.redeem_link = payout_link
            payment.save()
        except Exception as e:
            raise e

        return redirect("payment-requests")

    
    return render(request, "modals/mobile_money.html")


def resubmit_request(request, id=None):
    payment_request = PaymentRequest.objects.get(id=id)
    payment_request.status = "pending"
    payment_request.save()
    return redirect("payment-requests")