let playerWin = 0;
let computerWin = 0;
const head1 = document.querySelector("#head");
const text = document.createElement("h2");
const moreText = document.createElement("h2");
const evenMoreText = document.createElement("h2");
text.textContent = `Player points: ${playerWin} || Computer points: ${computerWin}`;
moreText.textContent = `Both players take their stance`;
evenMoreText.textContent= `Ready when you are...`;
head1.appendChild(text);
head1.appendChild(moreText);
head1.appendChild(evenMoreText);
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
let playerChoice;
let computerChoice;

function clickRock(){
  playerChoice = "Rock";
  battle(playerChoice,computerChoice)
}

function clickPaper(){
  playerChoice = "Paper";
  battle(playerChoice,computerChoice)
}

function clickScissors(){
  playerChoice = "Scissors";
  battle(playerChoice,computerChoice)
}

function round() {
  rock.addEventListener("click", clickRock);
  paper.addEventListener("click", clickPaper);
  scissors.addEventListener("click", clickScissors);
}

function battle(playerChoice, computerChoice) {
  let rand = Math.random() * 3;
  if (rand < 1) {
    computerChoice = "Rock";
  } else if (rand < 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  if (playerChoice == "Rock" && computerChoice == "Scissors") {
    playerWin++;
    evenMoreText.textContent = `You win the round`;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    playerWin++;
    evenMoreText.textContent = `You win the round`;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    playerWin++;
    evenMoreText.textContent = `You win the round`;
  } else if (playerChoice == computerChoice) {
    evenMoreText.textContent = `It's a tie`;
  } else {
    computerWin++;
    evenMoreText.textContent = `You lose the round`;
  }
  text.textContent = `Player points: ${playerWin} || Computer points: ${computerWin}`;
  moreText.textContent = `You picked ${playerChoice}, computer picked ${computerChoice}`;
  if (playerWin == 5) {
    evenMoreText.textContent="YOU WIN THE GAME"
    remove();
  } else if (computerWin == 5) {
    evenMoreText.textContent="YOU LOSE THE GAME"
    remove()
}}

function remove(){
  rock.removeEventListener("click", clickRock);
  paper.removeEventListener("click", clickPaper);
  scissors.removeEventListener("click", clickScissors);
}

round();
