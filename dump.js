function game () {
    for (let i = 0; i < 5; i+0) {
        let playerResponse = prompt("Please choose: Rock, Paper, or Scissors");
        let result = playRound(playerResponse);
        if (playerResponse.toLowerCase() === "rock" || playerResponse.toLowerCase() === "paper" || playerResponse.toLowerCase() === "scissors") {
            if (result.includes("won")) {
                alert(result);
                console.log(result);
                i++;
                if (i === 5) {
                    alert(`The game is over! You won! The final score is ${playerScore} to ${computerScore}`);
                    break;
                } else if (playerScore === 3) {
                    alert(`The game is over! You won! The final score is ${playerScore} to ${computerScore}`);
                    break;
                }
            } else if (result.includes("lost")) {
                alert(result);
                console.log(result);
                i++;
                if (i === 5) {
                    alert(`The game is over! You lost... The final score is ${playerScore} to ${computerScore}`);
                    break;
                } else if (computerScore === 3) {
                    alert(`The game is over! You lost... The final score is ${playerScore} to ${computerScore}`);
                    break;
                }
            } else
                alert(result);
                console.log(result);
                i+0;
        } else 
            alert(badResult);  
        }
    }



game();