from django.db import models

from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from django.contrib.auth.base_user import BaseUserManager


class ProfileManager(BaseUserManager):
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError("email not Found")
        email=self.normalize_email(email)
        user=self.model(email=email,**extra_fields)
        user.set_password(password)
        user.save()
        return user 
    def create_superuser(self,email,password,**extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("In SuperUser is_staff must be true")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("In SuperUser is_superuser must be true")
        return self.create_user(email=email, password=password, **extra_fields)

class UserProfile(AbstractBaseUser,PermissionsMixin):
    username=models.CharField(max_length=50,unique=True,blank=True,null=True)
    first_name=models.CharField(max_length=50,blank=True,null=True)
    last_name=models.CharField(max_length=50,blank=True,null=True)
    email=models.CharField(max_length=256,unique=True)
    image=models.ImageField(upload_to='profile/',blank=True,null=True)
    biodata=models.TextField(null=True,blank=True)
    created=models.DateField(auto_now_add=True)
    updated=models.DateField(auto_now_add=True)

    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    objects=ProfileManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

    def __str__(self):
        return self.email
