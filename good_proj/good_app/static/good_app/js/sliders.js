const createSliders = ()=>{
    const sliderTemplate = document.querySelector('#sliders-template').content.querySelectorAll('li');
    const slidersElements = [];
    for (let i = 0; i < sliderTemplate.length; i++){
        slidersElements[i] = (sliderTemplate[i].cloneNode(true));
    }
    return slidersElements;
};

const addSliders = ()=>{
    const slidersContainer = document.querySelector('.cases-buttons');
    const sliders = createSliders();
    sliders.forEach((slider)=> slidersContainer.appendChild(slider))
}

const slidersOnClick = ()=>{
    const caseSliders = document.querySelectorAll('.slider-container');
    caseSliders.forEach((slider) => {
        slider.addEventListener('click', () => {
            let sliderKnob = slider.querySelector('.slider-knob');
            let isSliderActivated = slider.classList.contains('active');
    
            if (!isSliderActivated) {
                sliderKnob.style.transform = "translateX(100%) translateY(-50%)"; // Поправка на сдвиг влево на 50%
                sliderKnob.style.backgroundColor = "#7C1C16"; // Цвет при активации
                slider.style.borderColor = "#7C1C16";
            } else {
                sliderKnob.style.transform = "translateX(-10%) translateY(-50%)"; // Поправка на сдвиг влево на 50%
                sliderKnob.style.backgroundColor = "#3D3D3D"; // Цвет при деактивации
                slider.style.borderColor = "#3D3D3D";
            }
    
            slider.classList.toggle('active');
        });
    });
}

export {addSliders, slidersOnClick};