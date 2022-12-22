const buttonDecrement = document.querySelector('button[data-action = decrement]');
const buttonIncrement = document.querySelector('button[data-action = increment]');

let value = Number(document.querySelector('#value').textContent);
let spanValue = document.querySelector('#value')

buttonIncrement.addEventListener('click', clickToAddOne);
function clickToAddOne() {
    value += 1;
    spanValue.textContent = value;
}

buttonDecrement.addEventListener('click', clickToRemoteOne);
function clickToRemoteOne() {
    value -= 1;
    spanValue.textContent = value;
}

