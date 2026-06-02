import os

from django.core.management.base import BaseCommand
from wagtail.models import Site


class Command(BaseCommand):
    help = "Update the default Wagtail Site hostname from the WAGTAIL_SITE_HOSTNAME env var"

    def handle(self, *args, **options):
        hostname = os.environ.get("WAGTAIL_SITE_HOSTNAME", "localhost")
        port = int(os.environ.get("WAGTAIL_SITE_PORT", "80"))

        site = Site.objects.filter(is_default_site=True).first()
        if site:
            site.hostname = hostname
            site.port = port
            site.save()
            self.stdout.write(f"Site updated: {hostname}:{port}")
        else:
            self.stdout.write("No default site found.")
