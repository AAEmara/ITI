from django.contrib import admin
from .models import Book, Category, ISBN

class CategoryInline(admin.StackedInline):
    model = Book.categories.through  # through table for many-to-many
    extra = 1

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'user', 'rate', 'views']
    list_filter = ['categories', 'user']
    inlines = [CategoryInline]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(ISBN)
class ISBNAdmin(admin.ModelAdmin):
    list_display = ['book_title', 'isbn_number']
