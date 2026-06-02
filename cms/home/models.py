from django.db import models
from grapple.models import GraphQLStreamfield, GraphQLString
from wagtail.admin.panels import FieldPanel
from wagtail.blocks import CharBlock, RichTextBlock
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page


class HomePage(Page):
    intro = models.CharField(max_length=500, blank=True)
    body = StreamField(
        [
            ("heading", CharBlock()),
            ("text", RichTextBlock()),
            ("image", ImageChooserBlock()),
        ],
        blank=True,
        use_json_field=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
        FieldPanel("body"),
    ]

    graphql_fields = [
        GraphQLString("intro"),
        GraphQLStreamfield("body"),
    ]
