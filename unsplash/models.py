from django.db import models

# Create your models here.
class Unsplash(models.Model):
    label = models.CharField(max_length=120)
    photo_url = models.CharField(max_length=200)

    def __str__(self):
        return self.label