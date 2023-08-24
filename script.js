//testing how to add styles in javascript
/*
let styling = document.querySelector('button');
styling.style.color = 'red';
styling.style.paddingInline = '1rem'
styling.style.paddingBlock = '0.3rem'
styling.style.borderRadius = '0.9rem'
styling.style.border = '1px solid black'
*/

document.getElementB
let computerGamePlayed = " ";
// let playerGame = " ";
let gameScore = JSON.parse(localStorage.getItem('gameScore'));

function computerRandomMove() {
    let computerMove = Math.random();
    // console.log(computerMove)
    if (computerMove > 0 / 3 && computerMove < 1 / 3) {
        computerGamePlayed = 'Rock'
    } else if (computerMove > 1 / 3 && computerMove < 2 / 3) {
        computerGamePlayed = 'Paper'
    } else if (computerMove > 2 / 3 && computerMove <= 3 / 3) {
        computerGamePlayed = 'Scissors'
    };
};

document.querySelector('.gameResult')
    .innerText = `Wins: 0 Losses: 0 Ties: 0`;

function startGame(playerGame) {
    computerRandomMove();

    let result = " ";
    //Rock functionality
    if (playerGame === 'Rock') {
        if (computerGamePlayed == 'Rock') {
            result = 'Tie'
        } else if (computerGamePlayed == 'Paper') {
            result = 'You lose'
        } else {
            result = 'You win'
        };

        //Paper functionality
    } else if (playerGame === 'Paper') {
        if (computerGamePlayed == 'Rock') {
            result = 'You win'
        } else if (computerGamePlayed == 'Paper') {
            result = 'Tie'
        } else {
            result = 'You lose'
        };
        //Scissors functionality
    } else if (playerGame === 'Scissors') {
        if (computerGamePlayed == 'Rock') {
            result = 'You lose'
        } else if (computerGamePlayed == 'Paper') {
            result = 'You win'
        } else {
            result = 'Tie'
        };
    };
    document.querySelector('.gameOutCome').innerText = `You  ${playerGame} -  Computer  ${computerGamePlayed}`;

    document.querySelector('.gameResult').innerText = `${result}`;

    //Results functionality
    if (result === 'You win') {
        gameScore.Wins++
    } else if (result === 'You lose') {
        gameScore.Losses++
    } else if (result === 'Tie') {
        gameScore.Ties++
    };

    localStorage.setItem('gameScore', JSON.stringify(gameScore));

    document.querySelector('.gameScore').innerText = `Wins: ${gameScore.Wins} - Losses: ${gameScore.Losses} - Ties: ${gameScore.Ties}`;
}

function resetGame() {
    // document.querySelector('.gameOutCome').innerText = " ";
    document.querySelector('.gameScore').innerText = `Wins: ${gameScore.Wins = 0} - Losses: ${gameScore.Losses = 0} - Ties: ${gameScore.Ties = 0}`;
}
