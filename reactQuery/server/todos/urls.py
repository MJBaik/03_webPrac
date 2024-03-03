from django.urls import path
from . import views

urlpatterns = [
    path('todo/', views.todo),
    path('update_todo/', views.update_todo)
]
