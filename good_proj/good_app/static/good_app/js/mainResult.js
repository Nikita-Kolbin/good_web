import {addSliders, slidersOnClick} from './sliders.js';
import {initializeResults} from './resultInference.js';
import {addPopupShow} from './popup.js'

import { addStorageOnBack } from './localStorage.js';
addStorageOnBack();

initializeResults();
addPopupShow();
addSliders();
slidersOnClick();