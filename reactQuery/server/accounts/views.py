from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model

from .serializers import UserSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = get_object_or_404(get_user_model(), id=request.user.id)
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save(profile_image=request.FILES.get("profile_image", ""))
            return Response(serializer.data, status=status.HTTP_201_CREATED)