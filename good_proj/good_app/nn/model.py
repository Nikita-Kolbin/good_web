from keras.utils import pad_sequences
from keras.models import load_model
from keras_preprocessing.text import tokenizer_from_json
import json


class Model:
    def __init__(self, model_name: str, token_name: str, max_sequence_length: int):
        self.model = load_model(model_name)

        with open(token_name, 'r', encoding='utf-8') as file:
            data = json.load(file)
            self.tokenizer = tokenizer_from_json(data)

        self.max_sequence_length = max_sequence_length

    def __encode(self, test_input: str):
        test_input_sequences = self.tokenizer.texts_to_sequences([test_input])
        test_input_sequences = pad_sequences(test_input_sequences, maxlen=self.max_sequence_length, padding='post')
        return test_input_sequences

    def __decode(self, predicted_output_text) -> str:
        result_string = ""
        for index, char in enumerate(predicted_output_text[0]):
            if index % 2 == 0:
                result_string += char
        return result_string

    def incline(self, name: str) -> str:
        name_sequences = self.__encode(name)
        predicted_output_sequences = self.model.predict(name_sequences, verbose=0)
        predicted_output_text = self.tokenizer.sequences_to_texts(predicted_output_sequences.argmax(axis=-1))
        result_string = self.__decode(predicted_output_text)
        return result_string

