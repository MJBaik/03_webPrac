from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'recipes/index.html')


def recipes(request):
    return render(request, 'recipes/recipes.html')