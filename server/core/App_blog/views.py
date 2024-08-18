from django.shortcuts import render

# Create your views here.
from .models import Blog
from .serializer import BlogSerializer
from rest_framework.viewsets import ModelViewSet

class BlogView(ModelViewSet):
    queryset=Blog.objects.all().order_by('-id')
    serializer_class=BlogSerializer
