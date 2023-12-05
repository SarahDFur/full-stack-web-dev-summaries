const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//----------------------------   1   ------------------------------------
// document.querySelector('.js-score').innerHTML = 
//     `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
updateScoreElem();

//---------------- additions --------------------
let isAutoPlaying = false;
let intervalID;

// const autoPlay = () => {
//     if(!isAutoPlaying){
//         isAutoPlaying = true;
//         // play the game every second
//         intervalID = setInterval(() => {
//             const playerMove = pickComputerMove();
//             playGame(playerMove);
//         }, 1000);
//     } else {
//         // stop interval
//         clearInterval(intervalID);
//         isAutoPlaying = false;
//     }
// };


function autoPlay() { // Avantages over arrow in this case: 1. easier to read. 2. hoisting
    if(!isAutoPlaying){
        isAutoPlaying = true;
        // play the game every second
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
    } else {
        // stop interval
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}
//addEventListeners:
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    });
document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    });
document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElem();
    });
document.querySelector('.js-auto-play-button')
    .addEventListener('click', () => {
        autoPlay();
    });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else {
        playGame('scissors');
    }
});
//------------------------------------------------
function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';
    switch(playerMove){
        case 'rock': 
            if (computerMove === 'rock') {
                result = 'Tie.'
            } else if (computerMove === 'paper') {
                result = 'You lose.';
            } else {
                result = 'You win.';
            }
        case 'paper': 
            if (computerMove === 'rock') {
                result = 'You win.'
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else {
                result = 'You lose.';
            }
        case 'scissors': 
            if (computerMove === 'rock') {
                result = 'You lose.'
            } else if (computerMove === 'paper') {
                result = 'You win.';
            } else {
                result = 'Tie.';
            } 
    }

    if(result === 'You win.') {
        score.wins++;
    } else if(result === 'You lose.') {
        score.losses++;
    } else if (result === 'Tie.') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    // document.querySelector('.js-score')
    //     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    updateScoreElem();

    document.querySelector('.js-result').
        innerHTML = result;
        
    document.querySelector('.js-moves').
        innerHTML = `You <img src="images/${playerMove}-emoji.png" 
    class="move-icon"> - <img src="images/${computerMove}-emoji.png" 
    class="move-icon"> Computer`;

}

function updateScoreElem() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
    const randomNumber = Math.random(); // 0 <= number < 1

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove ='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}