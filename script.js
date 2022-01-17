
//Give each button an event so that when you click it it plays a round.

const resultContainer = document.querySelector('.results');
const buttons = document.querySelectorAll('button'); 
const resultText = document.createElement('p');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.className);
        playRound((button.className), computerPlay());
    });
});




//playround(input, computerplay()): Take user input and computer input of two plays for a round of Rock, Paper, Scissors (RPS)
function playRound(playerPlay, computerPlay) {
    let result;

    if (getVictoryResults(playerPlay, computerPlay) === true) {
        vicMess(playerPlay);

    }else if (getVictoryResults(playerPlay, computerPlay) === false) {
        lossMess(playerPlay);

    } else {
        resultText.textContent = "You tied!";
        resultContainer.appendChild(resultText);
    }
    return result;
}


//computerplay(): A function that chooses a random option from RPS and usess that as the computer's play
function computerPlay() {
    let RPS = ["rock", "paper", "scissors"];
    return RPS [Math.floor(Math.random() * 3)];
}

//Compare the two "plays". Return 1 if player was victorious, return 0 if computer was victorious.
function getVictoryResults(playerPlay, computerPlay) {
    let gameResult;
    if (playerPlay === 'rock' && computerPlay === 'paper') {
        gameResult = false;
    }else if (playerPlay === 'rock' && computerPlay === 'scissors') {
        gameResult = true;
    }else if (playerPlay === 'paper' && computerPlay === 'rock') {
        gameResult = true;
    }else if (playerPlay === 'paper' && computerPlay === 'scissors') {
        gameResult = false;
    }else if (playerPlay === 'scissors' && computerPlay === 'paper'){
        gameResult = true;
    }else if (playerPlay === 'scissors' && computerPlay === 'rock'){
        gameResult = false;
    } else {
        gameResult = "tie";
    }
    return gameResult;
}

//vicMess() provides a victory message based on what you played 
function vicMess(playerPlay) {
    
    if (playerPlay === 'rock') {
        resultText.textContent = 'You won! Rock beats scissors!'
    } else if (playerPlay === 'paper') {
        resultText.textContent =  'You won! Paper beats rock!'
    } else {
        resultText.textContent =  'You won! Scissors beats paper!'
    }
    resultContainer.appendChild(resultText);
}

//lossMess() provides a loss message based on what you played
function lossMess(playerPlay) {
  
    if (playerPlay === 'rock') {
        resultText.textContent = 'You lost! Paper beats rock!'
    } else if (playerPlay === 'paper') {
        resultText.textContent =  'You lost! Scissors beats paper!'
    } else {
        resultText.textContent =  'You lost! Rock beats scissors!'
    }
    resultContainer.appendChild(resultText);
}


//game(): initiate playround() five times, store the score of each player, and after all rounds print who won.
//function game() {
//    let compScore = 0;
//    let playerScore = 0;
//    let roundResult;
//    for (let i = 0; i <5; i++) {
//        roundResult = playRound(prompt("Please enter rock, paper, or scissors!"), computerPlay());
//        if (roundResult === 1) {
//            playerScore++;
//         } else if (roundResult === 0) {
//            compScore++;
//        } else {
//            
//    }
//
//    if ((i === 4) && (playerScore > compScore)) {
//        console.log("Great job! You won " + playerScore + " to " + compScore + "!");
//    } else if ((i === 4) && (playerScore < compScore)) {
//        console.log("Bummer, the computer beat you " + compScore + " to " + playerScore + ".");
//    } else if ((i === 4) && (playerScore === compScore)) {
//        console.log("You tied with the computer. " + playerScore + " to " + compScore + ".");
//    }
//}
//}

    //store the number of times you win and lose
    //After all rounds print who won the round