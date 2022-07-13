function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let sizeBox = 30;

btnCreate.addEventListener('click', () => createBoxes(inputEl.value));
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const createBox = document.createElement('div');
    createBox.style.width = `${sizeBox}px`;
    createBox.style.height = `${sizeBox}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    sizeBox += 10;
    newBoxes.push(createBox);
  } 
  boxes.append(...newBoxes);
}

function destroyBoxes() {
  while (boxes.firstElementChild) {
    boxes.firstElementChild.remove()
  }
  inputEl.value = '';
  sizeBox = 30;
}