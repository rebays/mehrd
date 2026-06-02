import os

from .base import *

DEBUG = False

SECRET_KEY = os.environ["SECRET_KEY"]

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "").split()

# Cloudflare R2 storage — only active when credentials are present
_R2_ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "")
_R2_BUCKET = os.environ.get("CLOUDFLARE_R2_BUCKET_NAME", "")
_R2_KEY_ID = os.environ.get("CLOUDFLARE_R2_ACCESS_KEY_ID", "")
_R2_SECRET = os.environ.get("CLOUDFLARE_R2_SECRET_ACCESS_KEY", "")
_R2_PUBLIC_URL = os.environ.get("CLOUDFLARE_R2_PUBLIC_URL", "")

if _R2_ACCOUNT_ID and _R2_BUCKET and _R2_KEY_ID and _R2_SECRET:
    _R2_ENDPOINT = f"https://{_R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
    _R2_CUSTOM_DOMAIN = _R2_PUBLIC_URL.removeprefix("https://") if _R2_PUBLIC_URL else None

    STORAGES = {
        "default": {
            "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
            "OPTIONS": {
                "endpoint_url": _R2_ENDPOINT,
                "bucket_name": _R2_BUCKET,
                "access_key": _R2_KEY_ID,
                "secret_key": _R2_SECRET,
                "region_name": "auto",
                "location": "media",
                "file_overwrite": False,
                "querystring_auth": False,
                "custom_domain": _R2_CUSTOM_DOMAIN,
            },
        },
        "staticfiles": {
            "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
            "OPTIONS": {
                "endpoint_url": _R2_ENDPOINT,
                "bucket_name": _R2_BUCKET,
                "access_key": _R2_KEY_ID,
                "secret_key": _R2_SECRET,
                "region_name": "auto",
                "location": "static",
                "querystring_auth": False,
                "custom_domain": _R2_CUSTOM_DOMAIN,
            },
        },
    }

    STATIC_URL = f"{_R2_PUBLIC_URL}/static/"
    MEDIA_URL = f"{_R2_PUBLIC_URL}/media/"

try:
    from .local import *
except ImportError:
    pass
