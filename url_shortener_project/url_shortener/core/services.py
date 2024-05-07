from .models import URL
import hashlib

class URLShortenerService:
    @staticmethod
    def shorten_url(original_url):
        hash_object = hashlib.md5(original_url.encode())
        hashed_url = hash_object.hexdigest()[:6]
        return hashed_url

class URLRedirectService:
    @staticmethod
    def redirect(shortened_url):
        try:
            url = URL.objects.get(shortened_url=shortened_url)
            return url.original_url
        except URL.DoesNotExist:
            return None
