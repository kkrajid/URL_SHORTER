from django.urls import path
from .views import URLCreateAPIView, URLRedirectAPIView

urlpatterns = [
    path('api/shorten/', URLCreateAPIView.as_view(), name='shorten_url'),
    path('<str:shortened_url>/', URLRedirectAPIView.as_view(), name='redirect_url'),
]
