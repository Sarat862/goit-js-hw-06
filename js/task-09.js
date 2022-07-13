function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const body = document.querySelector('body');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}