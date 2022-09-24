function getComputerChoice() {

    let choice = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return(randomChoice);
}

function playRound (playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return("You tied, please try again")
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        return("You won!")
    } else {return "You lost!"
    }

}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));