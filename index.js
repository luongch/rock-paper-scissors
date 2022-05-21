function computerPlay() {
    let options = ["rock", "paper", "scissors"];

    return options[getRandomNumber(options.length)]
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

function playerSelection() {
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

function playRound(playerSelection, computerSelection) {
    let tie = "It's a tie";
    let youWin = `You win! ${playerSelection} beats ${computerSelection}`;
    let youLose = `You lose! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection == computerSelection) {
        return tie;
    }
    
    switch(playerSelection) {
        case "rock":         
            return computerSelection == "scissors" ? youWin : youLose;

        case "paper":
            return computerSelection == "rock" ? youWin : youLose;

        case "scissors":
            return computerSelection == "paper" ? youWin : youLose;
        default:
            return console.log("error in selection")    
        
    }
}

function game() {
    
}

let player = "rock";
let test = playRound(playerSelection(), computerPlay());
alert(test)