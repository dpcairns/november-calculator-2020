// import functions and grab DOM elements
import { 
    handleAddClick,
    handleSubtractClick,
    handleMultiplyClick,
    handleDivideClick
} from './clickHandlers.js';

// person 1 will work on adding the event listener

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);

// set event listeners to update state and DOM
subtractButton.addEventListener('click', handleSubtractClick);

// set event listeners to update state and DOM
multiplyButton.addEventListener('click', handleMultiplyClick);

// set event listeners to update state and DOM
divideButton.addEventListener('click', handleDivideClick);