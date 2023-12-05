const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//----------------------------   1   ------------------------------------
// document.querySelector('.js-score').innerHTML = 
//     `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
updateScoreElem();

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';
    switch(playerMove){
        case 'rock': 
            if (computerMove === 'Rock') {
                result = 'Tie.'
            } else if (computerMove === 'Paper') {
                result = 'You lose.';
            } else {
                result = 'You win.';
            }
        case 'paper': 
            if (computerMove === 'Rock') {
                result = 'You win.'
            } else if (computerMove === 'Paper') {
                result = 'Tie.';
            } else {
                result = 'You lose.';
            }
        case 'scissors': 
            if (computerMove === 'Rock') {
                result = 'You lose.'
            } else if (computerMove === 'Paper') {
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
        computerMove ='Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}