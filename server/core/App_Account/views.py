from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from .serializer import ProfileSerializer,UserProfileSerializer
from .models import Profile


class ProfileView(APIView):
    permission_classes=[IsAuthenticated,]
    authentication_classes=[TokenAuthentication]
    def get(self,request):
        user=request.user
        print(user)
        query=Profile.objects.get(user=user)
        serializer=ProfileSerializer(query)
        return Response({"message":"profile view request is successfull",'data':serializer.data})
        
    

    
    

        
        
    
    
    
