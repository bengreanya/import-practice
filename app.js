/* Imports */
import { fetchFirstData } from './fetch-utils.js';
import { renderFirstData } from './render-utils.js';
/* Get DOM Elements */
const firstContainer = document.getElementById('firstData');

import { fetchSecondData } from './fetch-utils.js';
import { renderSecondData } from './render-utils.js';
/* Get DOM Elements */
const secondContainer = document.getElementById('secondData');

import { fetchThirdData } from './fetch-utils.js';
import { renderThirdData } from './render-utils.js';
/* Get DOM Elements */
const thirdContainer = document.getElementById('thirdData');

import { fetchForthData } from './fetch-utils.js';
import { renderForthData } from './render-utils.js';
/* Get DOM Elements */
const forthContainer = document.getElementById('forthData');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const firsts = await fetchFirstData();
    for (let first of firsts) {
        const firstEl = renderFirstData(first);
        firstContainer.append(firstEl);
    }
});
window.addEventListener('load', async () => {
    const seconds = await fetchSecondData();
    for (let second of seconds) {
        console.log(second);
        const secondEl = renderSecondData(second);
        secondContainer.append(secondEl);
    }
});
window.addEventListener('load', async () => {
    const thirds = await fetchThirdData();
    for (let third of thirds) {
        const thirdEl = renderThirdData(third);
        thirdContainer.append(thirdEl);
    }
});
window.addEventListener('load', async () => {
    const forths = await fetchForthData();
    for (let forth of forths) {
        const forthEl = renderForthData(forth);
        forthContainer.append(forthEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
