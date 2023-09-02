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
    return `you Won! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Scissors" && playerSelection == "Paper") ||
    (computerSelection == "Paper" && playerSelection == "Rock")
  ) {
    return `you Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("enter your choice:").toLowerCase();
    playerSelection = playerSelection
      .substring(0, 1)
      .toUpperCase()
      .concat(playerSelection.substring(1));
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
