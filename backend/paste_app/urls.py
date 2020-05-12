from django.urls import path, include
from rest_framework import routers

from paste_app import views

router = routers.DefaultRouter()
router.register(r'pastes', views.PasteViewSet)

urlpatterns = [
	path('', include(router.urls))
]
