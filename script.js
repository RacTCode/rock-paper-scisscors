let playerWin = 0;
let computerWin = 0;

function play() {
  while (playerWin !== 5 && computerWin !== 5) {
    round();
  }
  if (playerWin == 5) {
    console.log("You Win :)");
  } else if (computerWin == 5) {
    console.log("You lose");
  } else {
    console.log("What?");
  }
}

function round() {
  let playerChoice;
  let computerChoice;
  let rand = Math.random() * 3;
  if (rand < 1) {
    computerChoice = "rock";
  } else if (rand < 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  do {
    playerChoice = prompt("Enter your poison: ").toLowerCase();
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      console.log("Invalid Input");
    }
  } while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  );
  battle(playerChoice, computerChoice);
}

function battle(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log(
      `You picked ${playerChoice}, computer picked ${computerChoice}`
    );
    console.log(`You win`);
    playerWin++;
    console.log(
      `Player points: ${playerWin} || Computer points: ${computerWin}`
    );
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log(
      `You picked ${playerChoice}, computer picked ${computerChoice}`
    );
    console.log(`You win`);
    playerWin++;
    console.log(
      `Player points: ${playerWin} || Computer points: ${computerWin}`
    );
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log(
      `You picked ${playerChoice}, computer picked ${computerChoice}`
    );
    console.log(`You win`);
    playerWin++;
    console.log(
      `Player points: ${playerWin} || Computer points: ${computerWin}`
    );
  } else if (playerChoice == computerChoice) {
    console.log(
      `You picked ${playerChoice}, computer picked ${computerChoice}`
    );
    console.log(`Tie`);
    console.log(
      `Player points: ${playerWin} || Computer points: ${computerWin}`
    );
  } else {
    console.log(
      `You picked ${playerChoice}, computer picked ${computerChoice}`
    );
    console.log(`You lose`);
    computerWin++;
    console.log(
      `Player points: ${playerWin} || Computer points: ${computerWin}`
    );
  }
}

play();
