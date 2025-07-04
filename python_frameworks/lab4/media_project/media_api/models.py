from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Cast(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class BaseMedia(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    release_date = models.DateField()
    categories = models.ManyToManyField(Category)
    casts = models.ManyToManyField(Cast)
    poster_image = models.ImageField(upload_to='posters/')

    class Meta:
        abstract = True

class Movie(BaseMedia):
    def __str__(self):
        return f"Movie: {self.title}"

class Series(BaseMedia):
    def __str__(self):
        return f"Series: {self.title}"
