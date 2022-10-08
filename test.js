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
const computerSelection = getComputerChoice();
let badResult = "Invalid value, Please enter Rock, Paper, or Scissors";


function game () {
    for (let i = 0; i < 5; i+0) {
        let playerResponse = prompt("Please choose: Rock, Paper, or Scissors");
        let result = playRound(playerResponse, b = computerSelection);
        console.log(result);
        if (result.includes("won")) {
            i++;
            if (i === 5) {
                alert(`The game is over! The final score is ${playerScore} to ${computerScore}`);
            }
        } else if (result.includes("lost")) {
            i++;
            if (i === 5) {
                alert(`The game is over! The final score is ${playerScore} to ${computerScore}`);
            }
        } else if (result.includes("tied")) {
            i+0;
        } else { 
            console.log(badResult); 
             }
    }
}


game();