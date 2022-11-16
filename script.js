// Ao clickar no botao, criar texto

const inputLetter = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const generateText = document.getElementById('carta-gerada');

function createText() {
  const text = inputLetter.value;
  const textSplit = text.split(' ');
  console.log(textSplit);
  generateText.innerText = '';
  for (let i = 0; i < textSplit.length; i += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = textSplit[i];
    generateText.appendChild(createSpan);
  }
}
buttonCreate.addEventListener('click', createText);
