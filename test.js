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

function playRound (playerSelection, b = computerSelection) {
    
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        let roundResult = (`You tied, please try again. The score is still ${playerScore} to ${computerScore}`)
        return roundResult;
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        playerScore++;
        let roundResult = (`You won!!! ${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}! The score now is ${playerScore} to ${computerScore}`)
        return roundResult;
    } else {
        computerScore++;
        let roundResult = `You lost! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${player}... The score is now ${playerScore} to ${computerScore}`;
        return roundResult;
    }


}
const playerSelection = "rock";
let computerSelection = getComputerChoice();
let badResult = "Invalid value, Please enter Rock, Paper, or Scissors";

function game () {
    for (let i = 0; i < 5; i++) {
        let playerResponse = prompt("Please choose: Rock, Paper, or Scissors")
        if (playerResponse.toLowerCase() === "rock" || playerResponse.toLowerCase() === "paper" || playerResponse.toLowerCase() === "scissors") {
            i++;
            console.log(playRound(playerResponse, b = computerSelection));
            return game();
        } else { 
            console.log(badResult); 
            return game(); }
    }
}
