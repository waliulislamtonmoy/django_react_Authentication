from django.shortcuts import render


# Create your views here.

from App_Account.models import UserProfile
from App_Account.serializer import UserSerializer,UserRegisterSerializer


from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import parsers
from rest_framework.permissions import IsAuthenticated

class UserViewSet(ModelViewSet):
    queryset=UserProfile.objects.all()
    serializer_class=UserSerializer
    parser_classes=[parsers.FormParser,parsers.JSONParser,parsers.MultiPartParser]


class UserRegister(APIView):
    def post(self,request):
        serializer=UserRegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response (serializer.data)
    
class Profile(APIView):
    permission_classes=[IsAuthenticated , ]

    def get(self,request):
       user=request.user
       print(user)
       response=UserProfile.objects.get(username=user.username)
       serializer=UserSerializer(response)
       
      
      
        
       return Response({"message":"user is found","data":serializer.data})

    
