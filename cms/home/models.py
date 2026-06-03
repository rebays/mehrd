from django.db import models
from grapple.models import GraphQLString
from wagtail.admin.panels import FieldPanel
from wagtail.models import Page


class HomePage(Page):
    intro = models.CharField(max_length=500, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
    ]

    graphql_fields = [
        GraphQLString("intro"),
    ]
