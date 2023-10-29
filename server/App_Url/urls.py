
from django.urls import path


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


from App_Account.views import UserViewSet,UserRegister,Profile

from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path("register/",UserRegister.as_view(),name="register"),
    path("profile/",Profile.as_view(),name="profile"),
    path('token/', TokenObtainPairView.as_view(), name='token'),
]+router.urls
