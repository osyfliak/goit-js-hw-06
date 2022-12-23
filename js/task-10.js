
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  div: document.querySelector("#boxes")
}

refs.buttonCreate.addEventListener('click', onCreateBox)
refs.buttonDestroy.addEventListener('click', onDestoroyBox)

function onCreateBox() {
  
}

function onDestoroyBox() {
  refs.input.value = '0';
  // refs.div.amout(0);
}