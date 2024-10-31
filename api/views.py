from django.shortcuts import render
#from django.http import HttpResponse
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

class RoomView(generics.CreateAPIView): #ListAPIView to list all the data in the database(i.e room details) CreateAPIView to create a room using graphical ez way
    queryset = Room.objects.all()
    serializer_class = RoomSerializer