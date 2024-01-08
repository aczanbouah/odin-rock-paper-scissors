let playerScore = 0;
let computerScore = 0;

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

function playerWinsRound(playerSelection, computerSelection) {
  playerScore++;
  return console.log(
    `You win the round - ${playerSelection} beats ${computerSelection}`
  );
}

function computerWinsRound(playerSelection, computerSelection) {
  computerScore++;
  return console.log(
    `You lost the round - ${playerSelection} loses to ${computerSelection}`
  );
}

function showScore() {
  console.log(`Your score - ${playerScore}`);
  console.log(`Computer score - ${computerScore}`);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  game();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        playerWinsRound(playerSelection, computerSelection);
        return showScore();
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        computerWinsRound(playerSelection, computerSelection);
        return showScore();
      }
    case "paper":
      if (computerSelection === "rock") {
        playerWinsRound(playerSelection, computerSelection);
        return showScore();
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        computerWinsRound(playerSelection, computerSelection);
        return showScore();
      }
    case "scissors":
      if (computerSelection === "paper") {
        playerWinsRound(playerSelection, computerSelection);
        return showScore();
      } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`);
        return playRound(playerSelection, computerSelection);
      } else {
        computerWinsRound(playerSelection, computerSelection);
        return showScore();
      }
    default:
      console.log("Invalid selection");
      return;
  }
}

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
