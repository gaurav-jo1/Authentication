from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from base.models import Note

class NoteSerializers(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'