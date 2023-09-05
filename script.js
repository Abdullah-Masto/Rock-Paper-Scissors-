function getComputerChoice() {
  let ran = Math.floor(Math.random() * 3);
  let choice;
  if (ran == 0) {
    choice = "Rock";
  } else if (ran == 1) {
    choice = "Paper";
  } else if (ran == 2) {
    choice = "Scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `even`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    return `you`;
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Scissors" && playerSelection == "Paper") ||
    (computerSelection == "Paper" && playerSelection == "Rock")
  ) {
    return `computer`;
  }
}

let again = document.createElement("button");
again.textContent = "play again";
again.classList.add("again");
again.style.display = "none";
document.body.appendChild(again);
let you = document.querySelector(".you.points");
let computer = document.querySelector(".computer.points");
let state = document.querySelector(".state");
state.style.display = "none";
let tools = document.querySelectorAll(".tools>button");
tools.forEach((tool) =>
  tool.addEventListener("click", () =>
    defineState(playRound(tool.id, getComputerChoice()))
  )
);

function playAgain() {
  you.textContent = 0;
  computer.textContent = 0;
  tools.forEach((tool) => (tool.disabled = true));
  state.style.display = "block";
  again.style.display = "block";
}

function defineState(winner) {
  if (winner === "you") {
    let youNum = Number(you.textContent);
    youNum++;
    if (youNum === 5) {
      state.textContent = "You won!";
      playAgain();
    } else {
      you.textContent = youNum;
    }
    return;
  }
  if (winner === "computer") {
    let computerNum = Number(computer.textContent);
    computerNum++;
    if (computerNum === 5) {
      state.textContent = "Computer won!";
      playAgain();
    } else {
      computer.textContent = computerNum;
    }
    return;
  }
}

again.addEventListener("click", () => {
  tools.forEach((tool) => {
    tool.disabled = false;
    again.style.display = "none";
    state.style.display = "none";
  });
});
