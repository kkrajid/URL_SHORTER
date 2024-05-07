from rest_framework import generics
from ..core.models import URL
from .serializers import URLSerializer
from ..core.services import URLShortenerService, URLRedirectService

class URLCreateAPIView(generics.CreateAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer

    def perform_create(self, serializer):
        original_url = serializer.validated_data['original_url']
        shortened_url = URLShortenerService.shorten_url(original_url)
        serializer.save(shortened_url=shortened_url)

class URLRedirectAPIView(generics.RetrieveAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer
    lookup_field = 'shortened_url'

    def get_object(self):
        shortened_url = self.kwargs['shortened_url']
        original_url = URLRedirectService.redirect(shortened_url)
        if original_url:
            return URL.objects.get(original_url=original_url)
        else:
            return None
