from rest_framework import serializers


class RedeemSerializer(serializers.Serializer):
    eventType = serializers.CharField(max_length=255)
    issueID = serializers.CharField(max_length=255)