from django .contrib import messages
from django .contrib.auth.decorators import login_required
from django.shortcuts import redirect, render, resolve_url
from django.urls import reverse
from .models import *
from django.http import JsonResponse

# Create your views here.

def home(request):
  return render(request, 'home.html')