computerPlay = () => {

    let options = ["rock", "paper", "scissors"];

    return options[getRandomNumber(options.length)]
}

getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

playerSelection = () => {
    let selection = "";
    do {
        selection = prompt("Please choose a weapon");
        if(!selection || !isValidSelection(selection.toLowerCase())) {
            alert("Please select between, rock, paper, or scissors")
        }
    } while (!isValidSelection(selection.toLowerCase()));
    
    return selection.toLowerCase();
}

function isValidSelection(selection) {
    return selection == "rock" || selection == "paper" || selection == "scissors";
}

playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    
    switch(playerSelection) {
        case "rock":         
            return computerSelection == "scissors";

        case "paper":
            return computerSelection == "rock";

        case "scissors":
            return computerSelection == "paper";
        default:
            return console.log("error in selection")    
        
    }
}

displayResult = (playerWon, playerSelection, computerSelection) => {
    let youWin = `You win! ${playerSelection} beats ${computerSelection}`;
    let youLose = `You lose! ${computerSelection} beats ${playerSelection}`;

    return playerWon ? youWin : youLose;
}

game = () => {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let index = 0; index < 5; index++) {
        let playerChoice = playerSelection();
        let computerChoice =  computerPlay();
        
        let result = playRound(playerChoice, computerChoice);

        if(result == "tie") {
            console.log("It's a tie");
        }
        else {
            result ? playerScore++ : computerScore++;
            console.log(displayResult(result, playerChoice, computerChoice));
        }
    }
    calculateFinalResult(playerScore, computerScore);

}

calculateFinalResult = (playerScore, computerScore) => {
    if(playerScore == computerScore) {
        console.log(`It's a tie, the score is ${playerScore} to ${computerScore}`);
    }
    else {
        let finalResult = playerScore > computerScore ? `You win, ${playerScore} to ${computerScore}`: 
        `You lose, ${playerScore} to ${computerScore}`;
        console.log(finalResult);
    }
}


game();