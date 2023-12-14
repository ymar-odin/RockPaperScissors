let getComputerChoice = function() {
    const array = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = array[Math.floor(Math.random() * array.length)];
    console.log(randomChoice);
}