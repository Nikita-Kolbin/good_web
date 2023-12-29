import {addClipboards, clipBoardsOnClick} from './clipboard.js';
import { addDownloadButtons, createDownloadButtons} from './downloadText.js';
import { resetSliders } from './sliders.js';
const CASES_NAMES = {
    'creative-case': 'Творительный падеж',
    'dative-case': 'Дательный падеж',
    'ablative-case':'Родительный падеж',
};

let availableCases = [];
const fillAvailableCases = ()=>{
    for (let [key, value] of Object.entries(CASES_NAMES)){
        availableCases.push(value);
    }
}
fillAvailableCases();

const tempVar = [
    [
        'Челябинский областной суд',
        '(род заглушка0)',
        '(дат заглушка)',
        'Челябинским областным судом'
    ],
    [        
        'Ярославский областной суд',
        '(род заглушка1)',
        '(дат заглушка)',
        'Ярославским областным судом'],
    [
        'Московский областной суд',
        '(род заглушка2)',
        '(дат заглушка)',
        'Московским областным судом'
    ],
    [
        'Санкт-Петербургский областной суд',
        '(род заглушка3)',
        '(дат заглушка)',
        'Санкт-Петербургским областным судом'
    ],
    [
        'Севастопольский областной суд',
        '(род заглушка4)',
        '(дат заглушка)',
        'Севастопольским областным судом'
    ]
];

var myVar = document.getElementById("myVar").value;
const resultValues = JSON.parse(myVar);//это будет json в виде объекта, точнее массива

const cardTemplate = document.querySelector('#card-template').content.querySelector('li');
const fieldTemplate = document.querySelector('#field-template').content.querySelector('li');


const cardsButton = document.querySelector('.cards-button');
const fieldsButton = document.querySelector('.fields-button');

const list = document.querySelector('.card-list');

let countOfCards= 0;
let countOfFields = 0;

const createCard = (info)=>{
    const cardElement = document.importNode(cardTemplate, true);
    const results = cardElement.querySelectorAll('.result-item');

    fillAvailableCases();
    for (let i = 0; i < results.length; i++){
        const classCase = Object.keys(CASES_NAMES)[2 - i];
        results[i].classList.add(classCase);
        const caseName = results[i].querySelector('.case-name');
        const result = results[i].querySelector('.result');
        caseName.textContent = availableCases.pop();
        result.textContent = info[i + 1];
    }
    cardElement.querySelector('.card-title').textContent =  info[0];
    cardElement.querySelector('img').setAttribute('data-clipboard-trigger', countOfCards);
    cardElement.querySelector('ul').setAttribute('data-clipboard-trigger', countOfCards);

    countOfCards += 1;
    return cardElement;
};

const createField = (info)=>{
    const fieldElement = fieldTemplate.cloneNode(true);
    const fieldTitle = fieldElement.querySelector('.field-title');
    const classCase = Object.keys(CASES_NAMES)[2 -countOfFields];
    fieldTitle.textContent = availableCases.pop();
    fieldElement.classList.add(classCase);
    fieldElement.classList.add('result-item');
    let infoToAdd = [];
    tempVar.forEach((element)=>{
        infoToAdd.push(element[countOfFields + 1]);
    })
    console.log();
    fieldElement.querySelector('.input-textaera').textContent = infoToAdd.join('\n');
    countOfFields +=1;
    return fieldElement;
};

const resetList = ()=>{
    list.innerHTML = '';
};

const fillList = (creator)=>{
    countOfCards = 0;
    countOfFields = 0;
    const length = creator == createCard ? tempVar.length : Object.keys(CASES_NAMES).length;
    for (let i = 0; i < length; i++){
        const newElement = creator(tempVar[i]);
        list.appendChild(newElement);
    }
    if (creator == createCard){
        clipBoardsOnClick();
        addClipboards();
    }
    else{
        addDownloadButtons();
        createDownloadButtons();
    }
}

const changeActive = (buttonToRemove, buttonToAdd)=>{
    buttonToRemove.classList.remove('active');
    buttonToAdd.classList.add('active')
}

const initializeResults = ()=>{
    fillList(createCard);
    cardsButton.addEventListener('click', ()=>{
        changeActive(fieldsButton, cardsButton);
        resetList();
        resetSliders();
        fillList(createCard);
    });
    fieldsButton.addEventListener('click', ()=>{
        changeActive(cardsButton, fieldsButton);
        resetList();
        resetSliders();
        fillAvailableCases();
        fillList(createField);
    });
}

export {initializeResults};

