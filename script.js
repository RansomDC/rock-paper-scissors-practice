const resultContainer = document.querySelector('.results');
const buttons = document.querySelectorAll('button'); 
const resultText = document.createElement('p');
const playerSB = document.querySelector('.playerScore');
const computerSB = document.querySelector('.computerScore');
const resetContainer = document.querySelector('.resetContainer'); 
const roundResults = document.createElement('h1');

//Give each button an event so that when you click it it plays a round.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.className);
        playRound((button.className), computerPlay());
    });
});


//playround(input, computerplay()): Take user input and computer input for a round of Rock, Paper, Scissors (RPS)
function playRound(playerPlay, computerPlay) {
    let playerScore = 0;
    let compScore = 0;
    

    if (getVictoryResults(playerPlay, computerPlay) === true) {
        vicMess(playerPlay);
        playerSB.textContent = +playerSB.textContent +1;
        if ((+playerSB.textContent === 5) && (+computerSB.textContent < 5)) {
            roundResults.textContent = "You have won best out of five games!";
            roundResults.classList.add('addedText');
            resultContainer.appendChild(roundResults);
            resetGame();
        }

    }else if (getVictoryResults(playerPlay, computerPlay) === false) {
        lossMess(playerPlay);
        computerSB.textContent = +computerSB.textContent +1;
        if ((+computerSB.textContent === 5) && (+playerSB.textContent < 5)) {
            roundResults.textContent = "You have lost best out of five games!";
            roundResults.classList.add('addedText');
            resultContainer.appendChild(roundResults);
            
            resetGame();
        }
    } else {
        resultText.textContent = "A tie match! Choose again!";
        resultContainer.appendChild(resultText);
        resultText.classList.add('addedText');
    }
}

//A function to generate a reset button
function resetGame() {
    const resetButton = document.createElement('button');
    resetButton.textContent = "Would you like to try again?"
    resetButton.addEventListener('click', () => {
        resultText.textContent = "A rematch!? BEGIN!";
        roundResults.remove();
        playerSB.textContent = 0;
        computerSB.textContent = 0;
        resetButton.remove();

    });
    resetContainer.appendChild(resetButton);
}


//computerplay(): A function that chooses a random option from RPS and usess that as the computer's play
function computerPlay() {
    let RPS = ["rock", "paper", "scissors"];
    return RPS [Math.floor(Math.random() * 3)];
}

//Compare the two "plays". Return true if player was victorious, return false if computer was victorious.
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
