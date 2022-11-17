// Ao clickar no botao, criar texto

const inputLetter = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const generateText = document.getElementById('carta-gerada');

// Classes
const styleClass = ['magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotateClass = ['rotateleft', 'rotateleft'];
const skewClass = ['skewleft', 'skewright'];

// Classes modo aleatorio

function createText() {
  generateText.innerText = '';
  const text = inputLetter.value;
  const textSplit = text.split(' ');
  // Verifica input
  if (text.replace(/\s/g, '').length === 0) {
    generateText.innerText = 'por favor, digite o conteúdo da carta.';
  }
  // Cria span com palavras
  for (let i = 0; i < textSplit.length; i += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = textSplit[i];
    generateText.appendChild(createSpan);
    const randomStyle = Math.floor(Math.random() * styleClass.length);
    const randomSize = Math.floor(Math.random() * sizeClass.length);
    const randomRotate = Math.floor(Math.random() * rotateClass.length);
    const randomSkew = Math.floor(Math.random() * skewClass.length);
    // Adiciona classe aos span
    createSpan.className = `${styleClass[randomStyle]} ${sizeClass[randomSize]} ${rotateClass[randomRotate]} ${skewClass[randomSkew]}`;
  }
}
buttonCreate.addEventListener('click', createText);
