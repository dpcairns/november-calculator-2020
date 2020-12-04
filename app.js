// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
    const result = number1 + number2;

    addResult.textContent = result;
});