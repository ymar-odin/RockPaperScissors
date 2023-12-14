function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    let randomChoice = array[Math.floor(Math.random() * array.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    
    let result;
    let resultWin = `You win! ${playerSelection} beats ${computerSelection}`;
    let resultLose = `You lose... ${playerSelection} loses to ${computerSelection}`;
    let resultTie = `It's a tie! ${playerSelection} is equal to ${computerSelection}`;

    if (playerSelection === 'rock') {

        switch(computerSelection) {
            case 'rock':
                result = resultTie;
                break;
            case 'paper':
                result = resultLose;
                break;
            case 'scissors':
                result = resultWin;
                break;
        }
    }   else if (playerSelection === 'paper') {

        switch(computerSelection) {
            case 'rock':
                result = resultWin;
                break;
            case 'paper':
                result = resultTie;
                break;
            case 'scissors':
                result = resultLose;
                break;
        }
    }   else {

        switch(computerSelection) {
            case 'rock':
                result = resultLose;
                break;
            case 'paper':
                result = resultWin;
                break;
            case 'scissors':
                result = resultTie;
                break;
        }    
    }

    return result;
}

// const playerSelection = 'scissors';
// const computerSelection = getComputerChoice();
// let gameResult = playRound(playerSelection.toLowerCase(), computerSelection);

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {

    const playerSelection = 'scissors';
    const computerSelection = 'rock';
    let gameResult = playRound(playerSelection.toLowerCase(), computerSelection);
 

    if(gameResult.search('win')) {
        playerScore++;
    } else if(gameResult.search('lose')) {
        computerScore++;
    } else {}
    
    console.log(gameResult);
    console.log(playerScore);
    console.log(computerScore); 
}
}