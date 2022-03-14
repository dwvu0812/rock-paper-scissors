var items = ['rock', 'paper', 'scissors'];

// console.log(typeof items[1])

function computerPlay() {
    return items[Math.floor(Math.random() * items.length)];
}

// playRound function

let playerScore = 0;
let computerScore = 0;
let winnerRound = '';

function playRound(playerSelection, computerSelection) {
    let playerLowercase = playerSelection.toLowerCase();

    if (playerLowercase === computerSelection) {
        winnerRound = 'Tie!';
    }
    else if (playerLowercase == 'rock' && computerSelection == 'scissors' ||
             playerLowercase == 'paper' && computerSelection == 'rock' ||
             playerLowercase == 'scissors' && computerSelection == 'paper'  ) {
        
                playerScore++;
                winnerRound = 'Player'
            }
    else if (computerSelection == 'rock' && playerLowercase == 'scissors' ||
            computerSelection == 'paper' && playerLowercase == 'rock' ||
            computerSelection == 'scissors' && playerLowercase == 'paper'  ) {
        
                computerScore++;
                winnerRound = 'Computer'
            }

}

// game function: play 5 round >> return the winner at the end

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice: ');
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log('Winner Round: '+(i+1)+' '+winnerRound);
    }
    if (playerScore > computerScore) {
        console.log('The final winner is player!');
    }
    else if (playerScore < computerScore) {
        console.log('The final winner is computer!');
    }
    else {
        console.log('Tie!');

    }
}

game();