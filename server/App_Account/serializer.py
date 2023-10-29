from App_Account.models import UserProfile
from rest_framework.serializers import ModelSerializer





class UserSerializer(ModelSerializer):
    class Meta:
        model=UserProfile
        fields=["id","username","first_name","last_name","email","password","image","biodata","created","updated"]
        extra_kwargs = {
            "password": {
                "write_only": True,
                "style": {
                    "input_type": "password"
                }
            }
        }


class UserRegisterSerializer(ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['id','username','email','password']
        extra_kwargs = {
            "password": {
                "write_only": True,
                "style": {
                    "input_type": "password"
                }
            }
        }
    def create(self,validated_data):
        user=UserProfile.objects.create_user(**validated_data)
        return user
