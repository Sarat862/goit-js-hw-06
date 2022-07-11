function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const buttonEl = document.querySelector('.change-color');
const body = document.querySelector('body');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
// }

// alert(rgbToHex(0, 51, 255));