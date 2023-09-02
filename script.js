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
    return `you tie! ${playerSelection} ties ${computerSelection}`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    return `you won! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Scissors" && playerSelection == "Paper") ||
    (computerSelection == "Paper" && playerSelection == "Rock")
  ) {
    return `you won! ${computerSelection} beats ${playerSelection}`;
  }
}

for (let index = 0; index < 30; index++) {
  console.log(getComputerChoice());
}
