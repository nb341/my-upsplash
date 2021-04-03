from .serializers import UnsplashSerializer
from rest_framework import viewsets
from .models import Unsplash
from django.http import JsonResponse
from django.shortcuts import render

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

    def destroy(self, request, *args, **kwargs):
        photo = self.get_object()
        id = photo.id
        photo.delete()
        return JsonResponse({'id':id})


def index(request, *args, **kwargs):
    return render(request, 'index.html')
