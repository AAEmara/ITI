from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    rate = models.DecimalField(max_digits=3, decimal_places=1)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

