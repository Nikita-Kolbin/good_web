from django import forms


class InputForm(forms.Form):
    name = forms.CharField(label='Названиу суда', max_length=250, required=False)
