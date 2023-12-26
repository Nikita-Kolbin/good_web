import {addClipboards, clipBoardsOnClick} from './clipboard.js';
import { addDownloadButtons, createDownloadButtons} from './downloadText.js';

const cardTemplate = document.querySelector('#card-template').content.querySelector('li');
const fieldTemplate = document.querySelector('#field-template').content.querySelector('li');


const cardsButton = document.querySelector('.cards-button');
const fieldsButton = document.querySelector('.fields-button');

const list = document.querySelector('.card-list');

let countOfCards= 0;

var myVar = document.getElementById("myVar").value;

const createCard = (newTitle)=>{
    const cardElement = document.importNode(cardTemplate, true);
    cardElement.querySelector('.card-title').textContent = 'Название организации ' + newTitle;
    cardElement.querySelector('img').setAttribute('data-clipboard-trigger', countOfCards);
    cardElement.querySelector('ul').setAttribute('data-clipboard-trigger', countOfCards);
    cardElement.querySelector('.case-name').textContent = countOfCards;
    countOfCards += 1;
    return cardElement;
};

const createField = (newTitle)=>{
    const fieldElement = fieldTemplate.cloneNode(true);
    fieldElement.querySelector('.field-title').textContent = 'Название падежа '+ newTitle;
    return fieldElement;
};

const resetList = ()=>{
    list.innerHTML = '';
};

const fillList = (creator)=>{
    countOfCards = 0;
    for (let i = 0; i < myVar; i++){
        const newElement = creator('NewHeader ' + i);
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
        fillList(createCard);
    });
    fieldsButton.addEventListener('click', ()=>{
        changeActive(cardsButton, fieldsButton);
        resetList();
        fillList(createField);
    });
}

export {initializeResults};

