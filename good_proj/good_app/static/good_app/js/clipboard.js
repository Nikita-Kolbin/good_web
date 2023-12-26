const createClipboard = (trigger, placeWhereCopy)=> {
    var clipboard = new ClipboardJS(trigger, {
        text: (trigger)=> {
            var triggerNumber = trigger.getAttribute('data-clipboard-trigger');
            var targetSelector = '#textToCopy[data-clipboard-trigger="' + triggerNumber + '"]';
            var targetElement = placeWhereCopy.querySelector(targetSelector);

            if (targetElement) {
                return targetElement.innerText;
            } else {
                return '';
            }
        }
    });
    return clipboard;
}
const addClipboards = ()=>{
    const clipboardTriggers = document.querySelectorAll('.clipboard-trigger');
    const clipboardTriggersForOneLine = document.querySelectorAll('.clipboard-trigger-one-result'); 
    clipboardTriggers.forEach((trigger) => {
        const clipboard = createClipboard(trigger, trigger.parentNode.parentNode);

    });
    clipboardTriggersForOneLine.forEach((trigger)=>{
        const clipboard = createClipboard(trigger, trigger.parentNode.parentNode);

    });
};
const clipBoardsOnClick = ()=> document.addEventListener('DOMContentLoaded', addClipboards);


export {addClipboards, clipBoardsOnClick};