const wordContainer = document.querySelector(".wordContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const category = document.querySelector("#category");
const guessesLeft = document.querySelector("#guesses");
const winner = document.querySelector("#winner");
const loser = document.querySelector("#loser");
const reset = document.querySelector("#reset");
let answer;
let wordState;
let num;

const animals = [
  "fish",
  "bird",
  "bat",
  "bear",
  "rabbit",
  "camel",
  "cat",
  "dog",
  "crab",
  "cow",
  "deer",
  "duck",
];
const movies = [
  "alien",
  "argo",
  "halloween",
  "annabelle",
  "jaws",
  "wings",
  "goodfellas",
  "wolf",
  "devil",
  "seven",
  "planes",
  "cars",
];
const cities = [
  "manchester",
  "milan",
  "madrid",
  "amsterdam",
  "prague",
  "athens",
  "berlin",
  "london",
  "budapest",
  "kiev",
  "lisbon",
  "moscow",
];

const categoriesArray = [animals, movies, cities];

const showWordLength = () => {
  for (let i = 0; i < answer.length; i++) {
    const button = document.createElement("button");
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
    alphabet.textContent = String.fromCharCode(i);
    alphabet.addEventListener("click", guessLetter);
    alphabet.addEventListener("click", () => {
      alphabet.style.pointerEvents = "none";
    });
    buttonContainer.append(alphabet);
  }
};

const guessLetter = (e) => {
  e.target.setAttribute("id", "selectedBtn");
  const wordButtons = document.querySelectorAll(".wordContainer button");
  const currentGuess = e.target.textContent;

  for (let i = 0; i < answer.length; i++) {
    if (currentGuess === answer[i]) {
      const corretElement = wordButtons[i];
      corretElement.textContent = currentGuess;
      wordState[i] = currentGuess;
    }
  }
  num--;
  guessesLeft.textContent = num;

  if (isWin()) {
    buttonContainer.style.pointerEvents = "none";
    winner.style.display = "block";
    reset.style.display = "block";
  } else if (num === 0) {
    buttonContainer.style.pointerEvents = "none";
    loser.style.display = "block";
    reset.style.display = "block";
  }
};

const isWin = () => {
  let win = false;

  if (!wordState.includes("_")) {
    win = true;
  }

  return win;
};

reset.addEventListener("click", () => {
  startGame();
});

const startGame = () => {
  let random = Math.floor(Math.random() * 3);
  answer = categoriesArray[random][Math.floor(Math.random() * 12)];
  wordState = [];
  num = 10;

  if (random === 0) {
    category.innerHTML = "Animals";
  } else if (random === 1) {
    category.innerHTML = "Movies";
  } else {
    category.innerHTML = "Cities";
  }

  guessesLeft.textContent = num;
  wordContainer.innerHTML = "";
  buttonContainer.innerHTML = "";

  winner.style.display = "none";
  loser.style.display = "none";
  reset.style.display = "none";
  buttonContainer.style.pointerEvents = "all";

  createKeyboard();
  showWordLength();
};

startGame();
