const transferButton = document.querySelector('.declination-button');
const goBackButton = document.querySelector('.go-back-button');

const saveData = ()=>{
    const textareaValue = document.querySelector('.input-textaera').value;
    localStorage.setItem("textareaData", textareaValue);
    localStorage.setItem("flag", false);
}

const loadSavedData = () => {
    const savedBoolData = localStorage.getItem("flag");
    if (savedBoolData != null && savedBoolData == 'true'){
        console.log('dsfgdg');
        
        const savedData = localStorage.getItem("textareaData");

        if (savedData !== null) {
            document.querySelector('.input-textaera').textContent = savedData;
        }
    }
    
}
const goBack = ()=> {
    localStorage.setItem("flag", true);
}

const addStorageOnTransfer = ()=>{
    transferButton.addEventListener('click',()=>{
        saveData();
    })
}

const addStorageOnBack = ()=>{
    goBackButton.addEventListener('click',()=>{
        goBack();
    })
}
export{addStorageOnBack, addStorageOnTransfer, loadSavedData}
