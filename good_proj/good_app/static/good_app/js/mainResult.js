import {addSliders, slidersOnClick} from './sliders.js';
import {initializeResults} from './resultInference.js';
import {addPopupShow} from './popup.js'
initializeResults();
addPopupShow();
addSliders();
slidersOnClick();