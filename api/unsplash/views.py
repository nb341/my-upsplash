from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import UnsplashSerializer
from rest_framework import viewsets
from .models import Unsplash

class UnsplashViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Unsplash.objects.all()
    serializer_class = UnsplashSerializer
  

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)