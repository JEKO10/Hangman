const wordContainer = document.querySelector(".wordContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const guessesLeft = document.querySelector("#guesses");
const winner = document.querySelector("#winner");
const loser = document.querySelector("#loser");
const reset = document.querySelector("#reset");
let answer;
let wordState;
let num;

const premiereLeague = [
  "Arsenal",
  "Aston Villa",
  "Brentford",
  "Brighton",
  "Burnley",
  "Chelsea",
  "Liverpool",
  "Everton",
  "Manchester United",
  "Tottenham ",
  "Watford",
  "West Ham",
];
const movies = ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"];
const cities = ["manchester", "milan", "madrid", "amsterdam", "prague"];

const categoriesArray = [premiereLeague, movies, cities];

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
  answer = "banana";
  wordState = [];
  num = 10;

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
