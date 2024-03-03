from django.db import models
from django.conf import settings

# Create your models here.

class Todo(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=255)
    crated_at = models.DateTimeField(auto_now_add=True)
    priority = models.IntegerField(range(1, 3))
    due_date = models.DateField(blank=True, null=True)
    completed_at = models.DateField(blank=True, null=True)
    is_repeated = models.BooleanField(default=False)