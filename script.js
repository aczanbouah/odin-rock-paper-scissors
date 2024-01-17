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
const resetGameButton = document.createElement("button");
const resultsContainer = document.querySelector(".results");
resetGameButton.classList.add("btn");
resetGameButton.innerText = "Start new game";
resetGameButton.addEventListener("click", resetGame);

const playRock = () => {
  playRound("rock");
};

const playPaper = () => {
  playRound("paper");
};

const playScissors = () => {
  playRound("scissors");
};

function addButtonListeners() {
  rockButton.addEventListener("click", playRock);
  paperButton.addEventListener("click", playPaper);
  scissorsButton.addEventListener("click", playScissors);
}

function removeButtonListeners() {
  rockButton.removeEventListener("click", playRock);
  paperButton.removeEventListener("click", playPaper);
  scissorsButton.removeEventListener("click", playScissors);
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
    removeButtonListeners();
    resultsContainer.appendChild(resetGameButton);
    if (playerScore === 5) {
      gameResult.innerText = "Congrats! You've won the game!";
    } else {
      gameResult.innerText = "Tough luck! Computer won the game!";
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundResult.innerText = "Good luck!";
  gameResult.innerText = "";
  resultsContainer.removeChild(resetGameButton);
  showScore();
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

addButtonListeners();
