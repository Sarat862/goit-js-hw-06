function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let sizeBox = 30;

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const createBox = document.createElement('div');
    boxes.append(createBox);
    createBox.style.width = `${sizeBox}px`;
    createBox.style.height = `${sizeBox}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    sizeBox += 10;
  } 
}

function destroyBoxes() {
  while (boxes.firstElementChild) {
    boxes.firstElementChild.remove()
  }
  inputEl.value = '';
}