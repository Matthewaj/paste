from rest_framework import viewsets, mixins
from rest_framework.viewsets import GenericViewSet

from paste_app.models import Paste
from paste_app.serializers import PasteSerializer


class PasteViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   GenericViewSet):
	"""
	API endpoint used to access the pastes
	"""

	queryset = Paste.objects.all()
	serializer_class = PasteSerializer
