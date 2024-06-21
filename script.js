// script.js
let display = document.getElementById('display');

function appendCharacter(char) {
    display.innerText += char;
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLastCharacter() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
