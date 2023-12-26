const inputArea = document.querySelector('.input-textaera');


const enablePopupScroll = ()=>{
    const popup = document.querySelector('.popup');
    document.body.style.overflow = 'hidden';
    popup.style.overflow ='auto';
}
const disablePopupScroll = ()=>{
    const popup = document.querySelector('.popup');
    document.body.style.overflow = 'auto';
    popup.style.overflow ='hidden';
}



const closeSection = (event)=> {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    if (popup && event.target.contains(overlay)) {
        closePopup();
        document.removeEventListener('click', closeSection);
    }
};
const closePopupOnKey =(evt)=>{
    if (evt.key === 'Escape'){
        evt.preventDefault();
        closePopup();
        document.removeEventListener('click', closePopupOnKey);
    }
};

const showPopup = ()=>{
    const popup = document.getElementById('popup');
    document.addEventListener('click', closeSection);
    document.addEventListener('keydown', closePopupOnKey);
    document.getElementById('overlay').style.display = 'block';
    popup.style.display = 'block';

    enablePopupScroll();
}
const closePopup = ()=>{
    const popup = document.getElementById('popup');
    document.getElementById('overlay').style.display = 'none';
    popup.style.display = 'none';
    disablePopupScroll(popup);
}

const addPopupShow = ()=>{
    document.getElementById('showPopup').addEventListener('click', showPopup);
};
const addPopupClose = ()=>{
    document.getElementById('closePopup').addEventListener('click', closePopup);
}

export {addPopupShow, addPopupClose}
