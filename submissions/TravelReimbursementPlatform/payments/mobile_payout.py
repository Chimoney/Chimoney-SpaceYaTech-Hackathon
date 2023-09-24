import requests
from decimal import Decimal


url = "https://api-v2-sandbox.chimoney.io/v0.2/payouts/chimoney"

def make_mobile_money_payout(email, phone_number, amount):
    payload = {"chimoneys": [
        {
            "email": email,
            "phone": phone_number,
            "valueInUSD": amount
        }
    ] }

    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "X-API-KEY": "760e5b851f0c4157ab7c66da82b7416ab86648a9b8d49690ab526a927070b75e"
    }

    response = requests.post(url, json=payload, headers=headers)
    
    payouts = response.json()["data"]
    payout_link = payouts["data"]

    results_list = []
    for x in payout_link:
        payment_object = {
            "id": x["id"],
            "valueInUSD": x["valueInUSD"],
            "redeemLink": x["redeemLink"]
        }
        results_list.append(payment_object)
    
    result_link = [x["redeemLink"] for x in results_list if x["valueInUSD"] == amount ][0]

    return result_link

