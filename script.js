// Ao clickar no botao, criar texto

const inputLetter = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const generateText = document.getElementById('carta-gerada');

// Classes

const styleClass = ['magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotateClass = ['rotateleft', 'rotateleft'];
const skewClass = ['skewleft', 'skewright'];

const letterCount = document.getElementById('carta-contador');
// Classes modo aleatorio

function createText() {
  generateText.innerText = '';
  const text = inputLetter.value;
  const textSplit = text.split(' ');
  letterCount.innerText = textSplit.length;
  // Verifica input
  if (text.replace(/\s/g, '').length === 0) {
    generateText.innerText = 'por favor, digite o conteúdo da carta.';
  } else {
    // Cria span com palavras
    for (let i = 0; i < textSplit.length; i += 1) {
      const createSpan = document.createElement('span');
      createSpan.innerText = textSplit[i];
      generateText.appendChild(createSpan);
    }
  }
}

// Adiciona classe aos span

const textSpan = generateText.children;
function addClass() {
  for (let i = 0; i < textSpan.length; i += 1) {
    const randomStyle = Math.floor(Math.random() * styleClass.length);
    const randomSize = Math.floor(Math.random() * sizeClass.length);
    const randomRotate = Math.floor(Math.random() * rotateClass.length);
    const randomSkew = Math.floor(Math.random() * skewClass.length);
    const random1 = styleClass[randomStyle];
    const random2 = sizeClass[randomSize];
    const random3 = rotateClass[randomRotate];
    const random4 = skewClass[randomSkew];
    textSpan[i].className = `${random1} ${random2} ${random3} ${random4}`;
  }
}
// Adiciona classe aleatoria quando clicar no span

function randomClassSpan(event) {
  const eventTarget = event.target;
  for (let i = 0; i < textSpan.length; i += 1) {
    const randomStyle = Math.floor(Math.random() * styleClass.length);
    const randomSize = Math.floor(Math.random() * sizeClass.length);
    const randomRotate = Math.floor(Math.random() * rotateClass.length);
    const randomSkew = Math.floor(Math.random() * skewClass.length);
    const random1 = styleClass[randomStyle];
    const random2 = sizeClass[randomSize];
    const random3 = rotateClass[randomRotate];
    const random4 = skewClass[randomSkew];
    eventTarget.className = `${random1} ${random2} ${random3} ${random4}`;
  }
}

function generateLetter() {
  createText();
  addClass();
  for (let i = 0; i < textSpan.length; i += 1) {
    textSpan[i].addEventListener('click', randomClassSpan);
  }
}

buttonCreate.addEventListener('click', generateLetter);