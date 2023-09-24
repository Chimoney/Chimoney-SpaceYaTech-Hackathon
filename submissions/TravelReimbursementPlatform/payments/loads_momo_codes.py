from .models import MomoCode
mobile_codes = [
    {
      "name": "Cameroon Mobile Money",
      "country": "Cameroon",
      "code": "FMM-XAF",
      "provider": "flw"
    },
    {
      "name": "Cameroon EUMOBILE",
      "country": "Cameroon",
      "code": "EUMOBILE",
      "provider": "flw"
    },
    {
      "name": "Cote d'Ivoire",
      "country": "Cote d'Ivoire",
      "code": "FMM-XOF",
      "provider": "flw"
    },
    {
      "name": "Ethiopia Amole",
      "country": "Ethiopia",
      "code": "ETBAMOLE",
      "provider": "flw"
    },
    {
      "name": "Ghana Vodafone",
      "country": "Ghana",
      "code": "VODAFONE",
      "provider": "flw"
    },
    {
      "name": "Ghana MTN",
      "country": "Ghana",
      "code": "MTN",
      "provider": "flw"
    },
    {
      "name": "Ghana Airtel",
      "country": "Ghana",
      "code": "AIRTEL",
      "provider": "flw"
    },
    {
      "name": "Kenya M-Pesa",
      "country": "Kenya",
      "code": "MPS",
      "provider": "flw"
    },
    {
      "name": "Kenya Airtel",
      "country": "Kenya",
      "code": "MPX",
      "provider": "flw"
    },
    {
      "name": "Rwanda MTN",
      "country": "Rwanda",
      "code": "MTN-RW",
      "provider": "flw"
    },
    {
      "name": "Rwanda Airtel",
      "country": "Rwanda",
      "code": "AIRTEL-RW",
      "provider": "flw"
    },
    {
      "name": "Senegal",
      "country": "Senegal",
      "code": "FMM",
      "provider": "flw"
    },
    {
      "name": "Tanzania VODACOM",
      "country": "Tanzania",
      "code": "VODACOM-TZS",
      "provider": "flw"
    },
    {
      "name": "Tanzania TIGOPESA",
      "country": "Tanzania",
      "code": "TIGOPESA-TZS",
      "provider": "flw"
    },
    {
      "name": "Tanzania Airtel",
      "country": "Tanzania",
      "code": "AIRTEL-TZS",
      "provider": "flw"
    },
    {
      "name": "Uganda MTN",
      "country": "Uganda",
      "code": "MTN-UG",
      "provider": "flw"
    },
    {
      "name": "Uganda Airtel",
      "country": "Uganda",
      "code": "AIRTEL-UG",
      "provider": "flw"
    }
  ]


def create_momo_codes():
    for momo_code in mobile_codes:
        MomoCode.objects.create(
            name=momo_code["name"],
            country=momo_code["country"],
            code=momo_code["code"],
            provider=momo_code["provider"]
        )