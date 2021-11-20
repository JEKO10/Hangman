const wordContainer = document.querySelector(".wordContainer");
const answer = "jeko";

const showWordLength = () => {
  for (let i = 0; i < answer.length; i++) {
    const button = document.createElement("button");
    button.textContent = "_";
    wordContainer.appendChild(button);
  }
};

showWordLength();
