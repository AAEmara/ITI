from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Book, ISBN

@receiver(post_save, sender=Book)
def create_isbn(sender, instance, created, **kwargs):
    if created and not instance.isbn:
        isbn = ISBN.objects.create(book_title=instance.title, author_title="Unknown")
        instance.isbn = isbn
        instance.save()
