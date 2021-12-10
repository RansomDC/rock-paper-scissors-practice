

//playround(input, computerplay()): Take user input and computer input of two plays for a round of Rock, Paper, Scissors (RPS)
function playRound(playerPlay) {
    let PPCorrected = playerPlay.toLowerCase();
    if (whoWins(PPCorrected, computerPlay()) === 1) {
        console.log("You won");
    }else if (whoWins(PPCorrected, computerPlay()) === 0) {
        console.log("You lost");
    } else {
        console.log("You tied!");
    }
}


//computerplay(): A function that chooses a random option from RPS and usess that as the computer's play
function computerPlay() {
    let RPS = ["rock", "paper", "scissors"];
    return RPS [Math.floor(Math.random() * 3)];
}

//Compare the two "plays". Return 1 if player was victorious, return 0 if computer was victorious.
function whoWins(playerPlay, computerPlay) {
    let playerVictory;
    if (playerPlay === 'rock' && computerPlay === 'paper') {
        playerVictory = 0;
    }else if (playerPlay === 'rock' && computerPlay === 'scissors') {
        playerVictory = 1;
    }else if (playerPlay === 'paper' && computerPlay === 'rock') {
        playerVictory = 1;
    }else if (playerPlay === 'paper' && computerPlay === 'scissors') {
        playerVictory = 0;
    }else if (playerPlay === 'scissors' && computerPlay === 'paper'){
        playerVictory = 1;
    }else if (playerPlay === 'scissors' && computerPlay === 'rock'){
        playerVictory = 0;
    } else {
        playerVictory = undefined;
    }
    return playerVictory;
}


//output the outcome e.g. "You won, Rock beats Scissors" or "You lost, slizzard beats drunk"
//game(): initiate playround() five times, 
    //store the number of times you win and lose
    //After all rounds print who won the round.