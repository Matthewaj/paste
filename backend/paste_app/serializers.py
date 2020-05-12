from rest_framework import serializers

from paste_app.models import Paste


class PasteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Paste
		fields = ["id", "name", "text"]
		read_only_fields = ["id"]