function getComputerChoice() {

    let choice = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return(randomChoice);
}

function playRound (playerSelection, b = computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        let roundResult = ("You tied, please try again.")
        return roundResult;
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        let roundResult = (`You won!!! ${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}!`)
        return roundResult;
    } else {
        let roundResult = `You lost! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${player}...`;
        return roundResult;
    }

}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game (playerSelection, b = computerSelection) {

    for (let i = 0; i < 5; i++) {

        playRound(playerSelection, b = computerSelection)
            if (roundResult.includes("won")) {
                let playerScore = 0; playerScore < 5, playerScore++;
                let roundMessage = `You won a round! The score now is ${playerScore} to ${computerScore}`;
                return roundMessage;
            } else if (roundResult.includes("lost")) {
                let computerScore = 0; computerScore < 5, computerScore++;
                let roundMessage = `You lost a round! The score now is ${playerScore} to ${computerScore}`;
                return roundMessage;
            } else {
                let roundMessage = `You tied, the score is still ${playerScore} to ${computerScore}`;
                return roundMessage;
            }
        }

}