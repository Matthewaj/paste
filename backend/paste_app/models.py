import uuid

from django.db import models


def hex_uuid() -> str:
	return uuid.uuid4().hex


class Paste(models.Model):
	id = models.CharField(max_length=32, primary_key=True, default=hex_uuid, editable=True)
	name = models.CharField(max_length=30)
	text = models.TextField()

