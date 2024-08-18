from django.contrib import admin

# Register your models here.
from .models import Blog

class BlogAdmin(admin.ModelAdmin):
    ordering=['id']
    list_display=['id',"user","title","date",'updatedate']

admin.site.register(Blog,BlogAdmin)