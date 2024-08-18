
from .models import Blog
from rest_framework.serializers import ModelSerializer

from django.contrib.auth.models import User
from App_Account.models import Profile




class UserSerializer(ModelSerializer):
    class Meta:
        model=User 
        fields=['id','username','first_name','last_name','email']
        
class ProfileSerializer(ModelSerializer):
    class Meta:
        model=Profile
        fields="__all__"
        read_only_fields=['user']
    def to_representation(self, instance):
        data=super().to_representation(instance)
        data['user']=UserSerializer(instance.user).data
        return data
        

class BlogSerializer(ModelSerializer):
    class Meta:
        model=Blog
        fields='__all__'
        read_only_fields=['user']
        depth=1
        
    def to_representation(self, instance):
        data=super().to_representation(instance)
        data['user']=ProfileSerializer(instance.user.profile).data
        return data