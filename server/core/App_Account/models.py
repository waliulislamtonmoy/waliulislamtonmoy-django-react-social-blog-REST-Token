from django.db import models

# Create your models here.

from django.contrib.auth.models import User 

class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    image=models.ImageField( upload_to='userprofile/',default="default.jpg",blank=True,null=True)
    
    def __str__(self):
        return str(self.user.username)