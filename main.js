const wordContainer = document.querySelector(".wordContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const winner = document.querySelector("#winner");
const answer = "banana";
const wordState = [];

const showWordLength = () => {
  for (let i = 0; i < answer.length; i++) {
    const button = document.createElement("button");
    // button.setAttribute("class", "hiddenColor");
    button.textContent = "_";
    wordContainer.append(button);
    wordState.push("_");
  }
};

const createKeyboard = () => {
  const start = "a";
  const end = "z";

  for (let i = start.charCodeAt(); i <= end.charCodeAt(); i++) {
    const alphabet = document.createElement("button");
    // alphabet.setAttribute("class", "letterColor");
    alphabet.textContent = String.fromCharCode(i);
    alphabet.addEventListener("click", guessLetter);
    alphabet.addEventListener("click", () => {
      alphabet.style.pointerEvents = "none";
    });
    buttonContainer.append(alphabet);
  }
};

const guessLetter = (e) => {
  // e.target.setAttribute("class", "grayColor");
  const wordButtons = document.querySelectorAll(".wordContainer button");
  const currentGuess = e.target.textContent;

  for (let i = 0; i < answer.length; i++) {
    if (currentGuess === answer[i]) {
      const corretElement = wordButtons[i];
      corretElement.textContent = currentGuess;
      wordState[i] = currentGuess;
    }
  }
  if (isWin()) {
    winner.style.display = "block";
  }
};

const isWin = () => {
  let win = false;

  if (!wordState.includes("_")) {
    win = true;
  }

  return win;
};

createKeyboard();
showWordLength();
