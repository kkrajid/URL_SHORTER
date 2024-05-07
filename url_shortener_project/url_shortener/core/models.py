from django.db import models


class URL(models.Model):
    original_url = models.URLField(unique=True)
    shortened_url = models.CharField(max_length=50, unique=True)
