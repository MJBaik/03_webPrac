from django.shortcuts import render, get_list_or_404, get_object_or_404
from .models import Todo
from .serializers import TodoSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status


# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def todo(request):
    if request.method == 'GET':
        todos = get_list_or_404(Todo, user_id=request.user.pk)
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        if request.user.is_authenticated:
            serializer = TodoSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def update_todo(request):
    todo = get_object_or_404(Todo, pk=request.GET.get('todo_id'))
    if request.method == 'DELETE':
        if todo.user == request.user:
            todo.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else :
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'PUT':
        serializer = TodoSerializer(todo, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)