from django.shortcuts import render
from django.http import HttpResponse
from .nn.model import Model
from .forms import *


model = Model('good_app/nn/model-v2.keras', 'good_app/nn/tokenizer-v2.json', 250)


def hello(request):
    global model

    s_in = s_out = None
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            s_in = form.cleaned_data['name']
    else:
        form = InputForm()

    if s_in is not None:
        s_out = model.incline(s_in)

    context = {
        "s_out": s_out,
        'form': form
    }

    return render(request, 'good_app/index.html', context)