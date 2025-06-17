from django.urls import path
from .views import books_list, book_details, book_delete, book_update, book_create

app_name = "booksapp"

urlpatterns = [
    path("", books_list, name="books-list"),
    path("details/<int:book_id>", book_details, name="book-details"),
    path("delete/<int:book_id>", book_delete, name="book-delete"),
    path("update/<int:book_id>", book_update, name="book-update"),
    path("create/", book_create, name="book-create")
]