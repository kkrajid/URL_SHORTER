from rest_framework import serializers
from ..core.models import URL

class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['original_url', 'shortened_url']
        read_only_fields = ['shortened_url']

