const wordContainer = document.querySelector(".wordContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const answer = "jeko";

const showWordLength = () => {
  for (let i = 0; i < answer.length; i++) {
    const button = document.createElement("button");
    button.textContent = "_";
    wordContainer.appendChild(button);
  }
};

const createKeyboard = () => {
  const start = "a";
  const end = "z";

  for (let i = start.charCodeAt(); i <= end.charCodeAt(); i++) {
    const alphabet = document.createElement("button");
    alphabet.textContent = String.fromCharCode(i);
    buttonContainer.append(alphabet);
  }
};

createKeyboard();
showWordLength();
