from django.shortcuts import render
from .nn.model import Model
from .forms import *
import json


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

    courts = [incline(i) for i in s_in.split('\n')]

    context = {
        "data_json": 1,
        "courts": json.dumps(courts, ensure_ascii=False),
    }

    return render(request, 'good_app/resultPage.html', context)


def report(request):
    return render(request, 'good_app/errorReportPage.html')

def incline(court: str) -> [str]:
    global model

    court = court.strip()
    res = [court]
    res.append("(Родительный заглушка)")
    res.append("(Дательный заглушка)")
    res.append(model.incline(court))

    return res
