function getComputerChoice() {

    let choice = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(randomChoice);
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection == "Rock") {
        return("You tied, please try again")
    } else if (computerSelection == "Scissors") {
        return("You won! Rock beats scissors!")
    } else {
        return("You lost! Paper beats rock!") }
}

const playerSelection = "Rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));