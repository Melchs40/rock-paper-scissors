function getComputerChoice() {
    let choice = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return(randomChoice);
}


let playerScore = 0;
let computerScore = 0;

// New Work

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

let result = document.getElementById("result");

function playRound () {
    let player = this.id.toLowerCase();
    let computer = getComputerChoice().toLowerCase();
    if ((computer == "rock" && player == "scissors") || (computer == "paper" && player == "rock") || (computer == "scissors" && player == "paper")) {
        computerScore++;
        let roundResult = (`You lost! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${player}... The score is now ${playerScore} to ${computerScore}`);
        result.textContent = roundResult;
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        playerScore++;
        let roundResult = (`You won!!! ${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}! The score now is ${playerScore} to ${computerScore}`);
        result.textContent = roundResult;
    } else {
        let roundResult = (`You tied, please try again. The score is still ${playerScore} to ${computerScore}`);
        result.textContent = roundResult;
    }
}