from django.db import models
from django.contrib.auth.models import AbstractUser
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

# Create your models here.

class User(AbstractUser):
    nickname = models.CharField(max_length=8)
    profile_image = ProcessedImageField(
            blank=True, 
            upload_to='profile_image/', 
            processors=[ResizeToFill(300, 300)], 
            format="JPEG",
            options={'quality': 70}
        )
