// var button = document.querySelector(".declination-button");
// const zap = 'img/zap.svg'
// const clock = 'img/clock.svg';
// const defaultTitle = "ПРОСКЛОНЯТЬ";
// const newTitle = "ОБРАБОТКА";
//
// const transferButton =()=> {
//     button.disabled = true;
//     button.classList.add("disabled");
//
//     button.innerHTML = `<img src="${clock}" width="24px" height="24px"><p>${newTitle}</p>`;;
//
//     var waitTime = 1500;
//
//     setTimeout(() =>{
//       window.location.href ="resultPage.html";
//       button.disabled = false;
//       button.classList.remove("disabled");
//       button.innerHTML = `<img src="${zap}" width="24px" height="24px"><p>${defaultTitle}</p>`;;
//     }, waitTime);
// }
// const addTransferButton = ()=> button.addEventListener('click', transferButton);
// export {addTransferButton}