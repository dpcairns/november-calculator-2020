import { sum } from './utils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractResult = document.getElementById('subtract-result');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResult = document.getElementById('multiply-result');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideResult = document.getElementById('divide-result');

// person 3 will write the click handler

export function handleAddClick() {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
        // function call: we're SUPPLYING ACTUAL input
        // ACTUAL numbers
        // we open the cabinets, get the flour, and follow the recipe
    const result = sum(number1, number2);
    
    addResult.textContent = result;
}

export function handleSubtractClick() {
    const number1 = Number(subtractInput1.value);
    const number2 = Number(subtractInput2.value);
    const result = number1 - number2;
    
    subtractResult.textContent = result;
}

export function handleMultiplyClick() {
    const number1 = Number(multiplyInput1.value);
    const number2 = Number(multiplyInput2.value);
    const result = number1 * number2;

    multiplyResult.textContent = result;
}

export function handleDivideClick() {
    const number1 = Number(divideInput1.value);
    const number2 = Number(divideInput2.value);
    const result = number1 / number2;
    
    divideResult.textContent = result;
}