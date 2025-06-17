from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    return render(request, 'main/base_layout.html')

books_data = [
    {
        "id": 1,
        "name": "Atomic Habits",
        "author": "James Clear",
        "price": 14.20
    }
]


def _get_book(book_id):
    for book in books_data:
        id = book.get('id')
        if id and id == book_id:
            return book
    return None


def books_list(request):
    my_context  = {
        "books_list": books_data
    }
    return render(request, 'booksapp/books_list.html', context=my_context)


@csrf_exempt
def book_create(request):
    if request.method == "POST":
        name = request.POST.get("name")
        author = request.POST.get("author")
        price = request.POST.get("price")
        if name and author and price:
            new_id = 1
            for book in books_data:
                new_id = max(book["id"], new_id) + 1
            books_data.append({
                "id": new_id,
                "name": name,
                "author": author,
                "price": float(price)
            })
        return redirect("booksapp:books-list")
    return render(request, "booksapp/book_create.html")


def book_details(request, **kwargs):
    book_id = kwargs.get("book_id")
    book = _get_book(book_id)
    return render(request, 'booksapp/book_details.html', context=book)


def book_delete(request, **kwargs):
    book_id = kwargs.get("book_id")
    book = _get_book(book_id)
    if book:
        books_data.remove(book)
    return redirect("booksapp:books-list")


def book_update(request, **kwargs):
    book_id = kwargs.get("book_id")
    book = _get_book(book_id)
    if not book:
        print("No books available!")
        return redirect("booksapp:books-list")
    if request.method == "POST":
        name = request.POST.get("name")
        author = request.POST.get("author")
        price = request.POST.get("price")
        if name and author and price:
            book['name'] = name
            book['author'] = author
            book['price'] = float(price)
        return redirect("booksapp:books-list")
    return render(request, "booksapp/book_update.html", context={"book": book})