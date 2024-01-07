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
        return playerScore++;
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        return computerScore++;
      }
    case "paper":
      if (computerSelection === "rock") {
        return playerScore++;
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        return computerScore++;
      }
    case "scissors":
      if (computerSelection === "paper") {
        return playerScore++;
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        return computerScore++;
      }
    default:
      console.log("Invalid selection");
      return;
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  while (playerScore !== 5 || computerScore !== 5) {
    playRound();
    if (playerScore === 5) {
      return console.log("Congrats you win");
    } else if (computerScore === 5) {
      return console.log(`Sorry! You lost!`);
    }
  }
}
