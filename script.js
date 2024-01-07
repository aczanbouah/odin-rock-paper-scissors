console.log("Hey there!");

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
  let computerChoice;
  const randomNumber = getRandomNumber(0, 2);
  if (randomNumber === 0) {
    computerChoice = `rock`;
  } else if (randomNumber === 1) {
    computerChoice = `paper`;
  } else computerChoice = `scissors`;
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt(`Rock, paper or scissors?`).toLowerCase();
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        console.log(`Player wins`);
        return;
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        console.log(`Computer wins!`);
        return;
      }
    case "paper":
      if (computerSelection === "rock") {
        console.log(`Player wins`);
        return;
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        console.log(`Computer wins!`);
        return;
      }
    case "scissors":
      if (computerSelection === "paper") {
        console.log(`Player wins`);
        return;
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        console.log(`Computer wins!`);
        return;
      }
  }
}
