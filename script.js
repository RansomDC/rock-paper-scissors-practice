

//playround(input, computerplay()): Take user input and computer input of two plays for a round of Rock, Paper, Scissors (RPS)
function playRound(playerPlay, computerPlay) {
    let PPCorrected = playerPlay.toLowerCase();
    let result;
    if ((PPCorrected === "rock") || (PPCorrected === "paper") || (PPCorrected === "scissors")) {
        if (whoWins(PPCorrected, computerPlay) === 1) {
            result = 1;
            console.log(vicMess(PPCorrected));
        }else if (whoWins(PPCorrected, computerPlay) === 0) {
            result = 0;
            console.log(lossMess(PPCorrected));
        } else {
            result = "tie";
            console.log("You tied!");
        }
    } else {
        console.log("You must enter rock, paper, or scissors!");
    }
    return result;
}


//computerplay(): A function that chooses a random option from RPS and usess that as the computer's play
function computerPlay() {
    let RPS = ["rock", "paper", "scissors"];
    return RPS [Math.floor(Math.random() * 3)];
}

//Compare the two "plays". Return 1 if player was victorious, return 0 if computer was victorious.
function whoWins(playerPlay, computerPlay) {
    let gameResult;
    if (playerPlay === 'rock' && computerPlay === 'paper') {
        gameResult = 0;
    }else if (playerPlay === 'rock' && computerPlay === 'scissors') {
        gameResult = 1;
    }else if (playerPlay === 'paper' && computerPlay === 'rock') {
        gameResult = 1;
    }else if (playerPlay === 'paper' && computerPlay === 'scissors') {
        gameResult = 0;
    }else if (playerPlay === 'scissors' && computerPlay === 'paper'){
        gameResult = 1;
    }else if (playerPlay === 'scissors' && computerPlay === 'rock'){
        gameResult = 0;
    } else {
        gameResult = undefined;
    }
    return gameResult;
}

//vicMess() provides a victory message based on what you played 
function vicMess(playerPlay) {
    let message;
    if (playerPlay === 'rock') {
        message = "You won! Rock beats scissors!";
    } else if (playerPlay === 'paper') {
        message = "You won! Paper beats rock!";
    } else {
        message = "You won! Scissors beats paper!";
    }
    return message;
}

//lossMess() provides a loss message based on what you played
function lossMess(playerPlay) {
    if (playerPlay === 'rock') {
        message = "You lost! Paper beats rock!";
    } else if (playerPlay === 'paper') {
        message = "You lost! Scissors beats paper!";
    } else {
        message = "You lost! Rock beats scissors!";
    }
    return message;
}


//game(): initiate playround() five times, store the score of each player, and after all rounds print who won.
function game() {
    let compScore = 0;
    let playerScore = 0;
    let roundResult;
    for (let i = 0; i <5; i++) {
        roundResult = playRound(prompt("Please enter rock, paper, or scissors!"), computerPlay());
        if (roundResult === 1) {
            playerScore++;
         } else if (roundResult === 0) {
            compScore++;
        } else {
            
    }

    if ((i === 4) && (playerScore > compScore)) {
        console.log("Great job! You won " + playerScore + " to " + compScore + "!");
    } else if ((i === 4) && (playerScore < compScore)) {
        console.log("Bummer, the computer beat you " + compScore + " to " + playerScore + ".");
    } else if ((i === 4) && (playerScore === compScore)) {
        console.log("You tied with the computer. " + playerScore + " to " + compScore + ".");
    }
}
}

    //store the number of times you win and lose
    //After all rounds print who won the round