let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

function handleClickDec() {
    counterValue -= 1;
    counter.textContent = counterValue;   
}

function handleClickInc() {
    counterValue += 1;
    counter.textContent = counterValue; 
}

btnDecrement.addEventListener("click", handleClickDec);
btnIncrement.addEventListener("click", handleClickInc);