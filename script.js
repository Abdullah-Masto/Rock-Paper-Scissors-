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
for (let index = 0; index < 30; index++) {
  console.log(getComputerChoice());
}
