
from rest_framework.serializers import ModelSerializer

from .models import Profile
from django.contrib.auth.models import User 

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model=User
        fields=['username','password','first_name','last_name','email']
        
        extra_kwargs={'password':{'write_only':True,'required':True}}
        
        
class ProfileSerializer(ModelSerializer):
    class Meta:
        model=Profile
        fields='__all__'
        read_only_fields=['user',]
    def to_representation(self, instance):
        data=super().to_representation(instance)
        data['user']=UserProfileSerializer(instance.user).data
        return data
        
        
