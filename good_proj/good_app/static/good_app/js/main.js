import {slidersOnClick} from './sliders.js';
import {addPopupClose, addPopupShow} from './popup.js'
import {addTextInput} from './import.js'
// import { addTransferButton } from './transfer.js';
// addTransferButton();
import { addStorageOnTransfer, loadSavedData } from './localStorage.js';
addStorageOnTransfer();
loadSavedData();

addTextInput();
addPopupShow();
addPopupClose();
slidersOnClick();
