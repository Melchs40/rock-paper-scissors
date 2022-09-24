function  getComputerChoice() {
    let choice = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(randomChoice);