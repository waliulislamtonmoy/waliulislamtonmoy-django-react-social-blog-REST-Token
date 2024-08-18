from django.db import models

from django.contrib.auth.models import User
# Create your models here.

class Blog(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    title=models.TextField(max_length=200)
    content=models.TextField(blank=True,null=True)
    image=models.ImageField( upload_to='blogpost/',blank=True,null=True)
    date=models.DateTimeField(auto_now_add=True)
    updatedate=models.DateField(auto_now=True)
    
    
    def __str__(self):
        return str(self.user) +" " + str(self.title)
    
