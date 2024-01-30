const choiceBut = document.querySelectorAll('button');
const resultArea = document.querySelector('.results');
let newResultPara = document.createElement('p');  
let scorePara = document.createElement('p'); 
let gameplayPara = document.createElement('p');
let finalResPara = document.createElement('p');
let counter = 0;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let tie = 0;


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
    newResultPara.textContent = result;
    resultArea.appendChild(newResultPara);
    return result;
}


function game() {

    const computerSelection = getComputerChoice();
    let gameResult = playRound(playerSelection.toLowerCase(), computerSelection);
    

    if(gameResult.search('win') + 1) {
        playerScore++;
    } else if(gameResult.search('lose') + 1) {
        computerScore++;
    } else {
        tie++;
    }
    gameplayPara.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}`
    resultArea.appendChild(gameplayPara);
    scorePara.textContent = `Player's score is ${playerScore}, Computer's score is ${computerScore}`;
    resultArea.appendChild(scorePara);


    if (playerScore === 5){
        finalResPara.textContent = `Player Wins!`;
        resultArea.appendChild(finalResPara);
    } else if (computerScore === 5) {
        finalResPara.textContent = `Computer Wins!`;
        resultArea.appendChild(finalResPara);
    } 
}


for (let i = 0; i < choiceBut.length; i++) {
choiceBut[i].addEventListener('click', function(){
     playerSelection = choiceBut[i].textContent;
     game();
     counter++;
    })
}

