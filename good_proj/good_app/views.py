from django.shortcuts import render
from .nn.model import Model
from .forms import *


model = Model('good_app/nn/model-v2.keras', 'good_app/nn/tokenizer-v2.json', 250)


def hello(request):
    global model

    s_in = s_out = None
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():
            s_in = form.cleaned_data['name']
    else:
        form = InputForm()

    if s_in is not None:
        s_out = model.incline(s_in)

    context = {
        "s_out": s_out,
        'form': form
    }

    return render(request, 'good_app/index_test.html', context)


def index(request):
    return render(request, 'good_app/index.html')


def result(request):
    s_in = None
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():
            s_in = form.cleaned_data['name']

    context = {
        "s_in": s_in,
        "card": True
    }

    return render(request, 'good_app/resultPage.html', context)


def report(request):
    return render(request, 'good_app/errorReportPage.html')
