// Ao clickar no botao, criar texto

const inputLetter = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const generateText = document.getElementById('carta-gerada');

function createText() {
  generateText.innerText = '';
  const text = inputLetter.value;
  console.log(text.length);
  const textSplit = text.split(' ');
  if (text.replace(/\s/g, '').length === 0) {
    generateText.innerText = 'por favor, digite o conteúdo da carta.';
  }
  for (let i = 0; i < textSplit.length; i += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = textSplit[i];
    generateText.appendChild(createSpan);
  }
}
buttonCreate.addEventListener('click', createText);
