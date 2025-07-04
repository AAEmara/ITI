from rest_framework import serializers
from .models import Category, Cast, Movie, Series

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cast
        fields = ['id', 'name']

class MovieSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    casts = CastSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = ['id', 'title', 'description', 'release_date', 'categories', 'casts', 'poster_image']

class SeriesSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    casts = CastSerializer(many=True, read_only=True)

    class Meta:
        model = Series
        fields = ['id', 'title', 'description', 'release_date', 'categories', 'casts', 'poster_image']
