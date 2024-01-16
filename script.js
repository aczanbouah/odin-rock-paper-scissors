let playerScore = 0;
let computerScore = 0;

const playerCounter = document.querySelector(".player-score");
playerCounter.innerText = playerScore;
const computerCounter = document.querySelector(".computer-score");
computerCounter.innerText = computerScore;
const roundResult = document.querySelector(".round-result");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const gameResult = document.querySelector(".game-result");

function addButtonListeners() {
  rockButton.addEventListener("click", () => {
    playRound("rock");
  });
  paperButton.addEventListener("click", () => {
    playRound("paper");
  });
  scissorsButton.addEventListener("click", () => {
    playRound("scissors");
  });
}

function removeButtonListeners() {
  rockButton.removeEventListener("click", () => {
    playRound("rock");
  });
  paperButton.removeEventListener("click", () => {
    playRound("paper");
  });
  scissorsButton.removeEventListener("click", () => {
    playRound("scissors");
  });
}

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

function playerWinsRound(playerSelection, computerSelection) {
  playerScore++;
  return (roundResult.innerText = `You win the round - ${playerSelection} beats ${computerSelection}`);
}

function computerWinsRound(playerSelection, computerSelection) {
  computerScore++;
  return (roundResult.innerText = `You lost the round - ${playerSelection} loses to ${computerSelection}`);
}

function showScore() {
  playerCounter.innerText = playerScore;
  computerCounter.innerText = computerScore;
}

function checkScore() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      gameResult.innerText = "Congrats! You've won the game!";
      return removeButtonListeners();
    } else {
      gameResult.innerText = "Tough luck! Computer won the game!";
      return removeButtonListeners();
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundResult.innerText = "Good luck!";
  gameResult.innerText = "";
  addButtonListeners();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        playerWinsRound(playerSelection, computerSelection);
        showScore();
        return checkScore();
      } else if (playerSelection === computerSelection) {
        roundResult.innerText = "It's a draw!";
        showScore();
        return checkScore();
      } else {
        computerWinsRound(playerSelection, computerSelection);
        showScore();
        return checkScore();
      }
    case "paper":
      if (computerSelection === "rock") {
        playerWinsRound(playerSelection, computerSelection);
        showScore();
        return checkScore();
      } else if (playerSelection === computerSelection) {
        roundResult.innerText = "It's a draw!";
        showScore();
        return checkScore();
      } else {
        computerWinsRound(playerSelection, computerSelection);
        showScore();
        return checkScore();
      }
    case "scissors":
      if (computerSelection === "paper") {
        playerWinsRound(playerSelection, computerSelection);
        showScore();
        return checkScore();
      } else if (playerSelection === computerSelection) {
        roundResult.innerText = "It's a draw!";
        showScore();
        return checkScore();
      } else {
        computerWinsRound(playerSelection, computerSelection);
        showScore();
        return checkScore();
      }
    default:
      console.log("Invalid selection");
      return;
  }
}

resetGame();
