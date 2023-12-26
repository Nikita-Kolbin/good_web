from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='index'),
    path('test/', hello, name='index_test'),
    path('result/', result, name='result'),
    path('report/', report, name='report'),
]

