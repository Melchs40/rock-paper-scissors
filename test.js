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

    if (playerSelection.toLowerCase == computerSelection.toLowerCase) {
        return("You tied, please try again")
    } else if ((playerSelection.toLowerCase == "rock" && computerSelection.toLowerCase == "scissors") || (playerSelection.toLowerCase == "paper" && computerSelection.toLowerCase == "rock") || (playerSelection.toLowerCase == "scissors" && computerSelection.toLowerCase == "paper")) {
        return("You won!")
    } else
        return("You lost!")
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));