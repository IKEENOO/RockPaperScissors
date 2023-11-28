const buttons = document.querySelectorAll('.btn');
const player = document.querySelector("#player-score");
const computer = document.querySelector("#comp-score");
const output = document.querySelector("#output");

let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
let playerScore = 0;
let compScore = 0;

player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${compScore}`;
output.textContent = `May the Best Person Win!`

buttons.forEach((button)=>{button.addEventListener('click',()=>{
    playerChoice = button.id;
    if (playerChoice == "rock"){
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper"){
        playerChoiceInt = 1;
    }
    else if (playerChoice == "scissors"){
        playerChoiceInt = 2;
    }
    compChoiceInt = computerPlay(compChoice);
    playGame();
    })
})

function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if(choiceNum == 2){
        compChoice.Value = "scissors";
    }
    return choiceNum;
}

function playRound(){
    let win_array = [[0, 2, 1], 
                    [1, 0, 2], 
                    [2, 1, 0]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0){
        output.textContent = `Both players tied!`;
    }
    else if (result == 1){
        output.textContent = `Congratulations! You left your computer without a chance!`;
        playerScore++;
    }
    else if (result == 2){
        output.textContent = `The computer chose ${compChoice.Value} and demonstrates its superiority!`;
        compScore++;
    }
}

function playGame(){
    output.textContent = `Choose Rock, Paper, or Scissors`;
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;
    if (playerScore == 5){
        output.textContent = "You are a winner! The computer can't compete with you!";
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
    else if (compScore == 5){
        output.textContent = `Great game, but the computer wins!`
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
}