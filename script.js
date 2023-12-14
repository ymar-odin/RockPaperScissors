function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    let randomChoice = array[Math.floor(Math.random() * array.length)];
    console.log(randomChoice);
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === 'rock') {

        switch(computerSelection) {
            case 'rock':
                result = `It's a tie! ${playerSelection} is equal to ${computerSelection}`;
                break;
            case 'paper':
                result = `You lose... ${playerSelection} loses to ${computerSelection}`;
                break;
            case 'scissors':
                result = `You win! ${playerSelection} beats ${computerSelection}`;
                break;
        }
    }   else if (playerSelection === 'paper') {

        switch(computerSelection) {
            case 'rock':
                result = `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            case 'paper':
                result = `It's a tie! ${playerSelection} is equal to ${computerSelection}`;
                break;
            case 'scissors':
                result = `You lose... ${playerSelection} loses to ${computerSelection}`;
                break;
        }
    }   else {

        switch(computerSelection) {
            case 'rock':
                result = `You lose... ${playerSelection} loses to ${computerSelection}`;
                break;
            case 'paper':
                result = `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            case 'scissors':
                result = `It's a tie! ${playerSelection} is equal to ${computerSelection}`;
                break;
        }    
    }

    return result;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));