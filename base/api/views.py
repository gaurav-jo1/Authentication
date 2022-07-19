# Django
from django.shortcuts import render

# Django REST Framework
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Simple JWT
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Serializer
from .serializers import NoteSerializers

# Create your views here.
def front(request):
    context = {}
    return render(request, "index.html", context)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNote(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializers(notes, many=True)
    return Response(serializer.data)
