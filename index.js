computerPlay = () => {

    let options = ["rock", "paper", "scissors"];

    return options[getRandomNumber(options.length)]
}

getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

// playerSelection = () => {
//     let selection = "";
//     do {
//         selection = prompt("Please choose a weapon");
//         if(!selection || !isValidSelection(selection.toLowerCase())) {
//             alert("Please select between, rock, paper, or scissors")
//         }
//     } while (!isValidSelection(selection.toLowerCase()));
    
//     return selection.toLowerCase();
// }

// function isValidSelection(selection) {
//     return selection == "rock" || selection == "paper" || selection == "scissors";
// }

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

displayResult = (result, playerSelection, computerSelection) => {
    clearResult();

    if(result == "tie") {
        currentRound.textContent = "It's a tie"
    }
    else {
        let youWin = `You win! ${playerSelection} beats ${computerSelection}`;
        let youLose = `You lose! ${computerSelection} beats ${playerSelection}`;

        result ? playerScore++ : computerScore++;
        currentRound.textContent = result ? youWin : youLose;
    }
    
}

clearResult = () => {
    //clear the result before playing
    currentRound.textContent = "";
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
    return playerScore > computerScore ? `You win, ${playerScore} to ${computerScore}`: 
    `You lose, ${playerScore} to ${computerScore}`;
}

play = (e) => {    
    let playerSelection = e.target.value;
    let computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection)

    displayResult(result, playerSelection, computerSelection);
    displayTotal();
    if(playerScore == winsNeeded || computerScore == winsNeeded) {
        let finalResult = calculateFinalResult(playerScore, computerScore);
        window.alert(finalResult)
        resetGame();
    }
}

displayTotal = () => {
    playerTotal.textContent = `${playerScore}`;
    computerTotal.textContent = `${computerScore}`;
}

resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    clearResult();
    displayTotal();
}

//start of game
let winsNeeded = 3;
let playerTotal = document.querySelector(".playerTotal");
let computerTotal = document.querySelector(".computerTotal");
let currentRound = document.querySelector(".currentRound");

const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
    button.addEventListener("click", play)
});

let playerScore = 0;
let computerScore = 0;
displayTotal();