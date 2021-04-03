from rest_framework import serializers
from .models import Unsplash
class UnsplashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unsplash
        fields = '__all__'
        