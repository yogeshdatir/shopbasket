from django.contrib import admin
from django.urls import include, path
from .apis import GoogleLogin

urlpatterns = [
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
]