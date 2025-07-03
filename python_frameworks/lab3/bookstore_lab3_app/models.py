from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    def clean(self):
        if len(self.name) < 2:
            raise ValidationError("Category name must be at least 2 characters.")

class ISBN(models.Model):
    author_title = models.CharField(max_length=100)
    book_title = models.CharField(max_length=100)
    isbn_number = models.CharField(max_length=13, unique=True, editable=False)

    def save(self, *args, **kwargs):
        if not self.isbn_number:
            import uuid
            self.isbn_number = str(uuid.uuid4()).replace('-', '')[:13]
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.book_title} - {self.isbn_number}"

class Book(models.Model):
    title = models.CharField(max_length=50)
    desc = models.TextField()
    rate = models.DecimalField(max_digits=3, decimal_places=1)
    views = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category)
    isbn = models.OneToOneField(ISBN, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title
