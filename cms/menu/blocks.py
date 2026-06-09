from wagtail import blocks
from grapple.helpers import register_streamfield_block
from grapple.models import (
    GraphQLPage,
    GraphQLStreamfield,
    GraphQLString,
)

@register_streamfield_block
class SubLinkBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    link_page = blocks.PageChooserBlock(required=False)
    link_url = blocks.URLBlock(required=False)

    graphql_fields = [
        GraphQLString("title"),
        GraphQLPage("link_page"),
        GraphQLString("link_url"),
    ]

    class Meta:
        graphql_name = "SubLinkBlock"

@register_streamfield_block
class MenuPageLinkBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    page = blocks.PageChooserBlock()

    graphql_fields = [
        GraphQLString("title"),
        GraphQLPage("page"),
    ]

    class Meta:
        graphql_name = "MenuPageLinkBlock"

@register_streamfield_block
class MenuExternalLinkBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    url = blocks.URLBlock()

    graphql_fields = [
        GraphQLString("title"),
        GraphQLString("url"),
    ]

    class Meta:
        graphql_name = "MenuExternalLinkBlock"

@register_streamfield_block
@register_streamfield_block
class LinksGroupBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    links = blocks.StreamBlock([
        ('page_link', MenuPageLinkBlock()),
        ('external_link', MenuExternalLinkBlock()),
    ])

    graphql_fields = [
        GraphQLString("title"),
        GraphQLStreamfield("links"),
    ]

    class Meta:
        graphql_name = "LinksGroupBlock"


@register_streamfield_block
class DropdownBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    page = blocks.PageChooserBlock(required=False, help_text="Optional — makes the dropdown title a clickable link.")
    items = blocks.StreamBlock([
        ('page_link', MenuPageLinkBlock()),
        ('external_link', MenuExternalLinkBlock()),
        ('links_group', LinksGroupBlock()),
    ])

    graphql_fields = [
        GraphQLString("title"),
        GraphQLPage("page"),
        GraphQLStreamfield("items"),
    ]

    class Meta:
        graphql_name = "DropdownBlock"


class MenuItemBlock(blocks.StreamBlock):
    page_link = MenuPageLinkBlock()
    external_link = MenuExternalLinkBlock()
    links_group = LinksGroupBlock()
    dropdown = DropdownBlock()

    class Meta:
        graphql_name = "MenuItemBlock"