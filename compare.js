let computerMove = " ";
let score = {
Wins: 0,
Losses: 0,
Ties: 0,
};

function randomComputerMove() {
const randomMove = Math.random();
if (randomMove >= 0 / 3 && randomMove < 1 / 3) {
computerMove = "Rock";
} else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
computerMove = "Paper";
} else {
computerMove = "Scissors";
}
}

function rock() {
randomComputerMove();
let result = "";
if (computerMove == "Rock") {
result = "Tie";
} else if (computerMove == "Paper") {
result = "You lose";
} else {
result = "You win";
}

// Updates score
if (result === "You win") {
score.Wins++;
} else if (result === "You lose") {
score.Losses++;
} else {
score.Ties++;
}

document.querySelector("#display-screen").textContent = `You chose Rock. Computer chose ${computerMove}. ${result}`;
document.getElementById('scores').innerText =  `Wins: ${score.Wins} Losses: ${score.Losses}. Ties: ${score.Ties}`;
}

function paper() {
randomComputerMove();
let result = "";
if (computerMove == "Rock") {
result = "You win";
} else if (computerMove == "Paper") {
result = "Tie";
} else {
result = "You lose";
}

// Updates score
if (result === "You win") {
score.Wins++;
} else if (result === "You lose") {
score.Losses++;
} else {
score.Ties++;
}

document.querySelector("#display-screen").textContent = `You chose Paper. Computer chose ${computerMove}. ${result}`;
document.getElementById('scores').innerText =  `Wins: ${score.Wins} Losses: ${score.Losses}. Ties: ${score.Ties}`;
}

function scissors() {
randomComputerMove();
let result = "";
if (computerMove == "Rock") {
result = "You lose";
} else if (computerMove == "Paper") {
result = "You win";
} else {
result = "Tie";
}

// Updates score
if (result === "You win") {
score.Wins++;
} else if (result === "You lose") {
score.Losses++;
} else {
score.Ties++;
}

document.querySelector("#display-screen").textContent = `You chose Scissors. Computer chose ${computerMove}. ${result}`;
document.getElementById('scores').innerText =  `Wins: ${score.Wins} Losses: ${score.Losses}. Ties: ${score.Ties}`;
}