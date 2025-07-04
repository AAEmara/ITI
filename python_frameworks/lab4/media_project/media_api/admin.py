from django.contrib import admin
from .models import Category, Cast, Movie, Series

admin.site.register(Category)
admin.site.register(Cast)
admin.site.register(Movie)
admin.site.register(Series)
