let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let response = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * response.length);
  return response[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === computerSelection) {
    return "The game is tied, please try again";
  } else if (
    (playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "ROCK")
  ) {
    computerScore++;
    return `You chose ${playerSelection} and the computer chose ${computerSelection}, THE COMPUTER wins!`;
  } else if (
    (computerSelection == "ROCK" && playerSelection == "PAPER") ||
    (computerSelection == "PAPER" && playerSelection == "SCISSORS") ||
    (computerSelection == "SCISSORS" && playerSelection == "ROCK")
  ) {
    playerScore++;
    return `You chose ${playerSelection} and the computer chose ${computerSelection}, YOU win!`;
  } else {
    return "Please choose a valid weapon";
  }
};

const game = () => {
  // for (let i = 0; i < 5; i++) {}
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt("Please choose a weapon...");
    console.log(playRound(playerSelection, getComputerChoice()));
  }
  if (playerScore > computerScore) {
    console.log(
      `Final score: You ${playerScore}- Computer ${computerScore}. You win!`
    );
  }
  if (computerScore > playerScore) {
    console.log(
      `Final score: You ${playerScore}- Computer ${computerScore}. The Computer wins!`
    );
  }
};

console.log(game());
