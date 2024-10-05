let wins = 0;
let losses = 0;
let ties = 0;
let attempts = 0;

function stoneClick() {
    playGame('stone');
}

function paperClick() {
    playGame('paper');
}

function scissorClick() {
    playGame('scissor');
}

function playGame(playerChoice) {
    const moves = ['stone', 'paper', 'scissor'];
    const computerChoice = moves[Math.floor(Math.random() * 3)];
    
    document.getElementById('Moves').innerHTML = `You chose <b>${playerChoice}</b>, Computer chose <b>${computerChoice}</b>`;

    resetButtonStyles();

    document.getElementById(`${playerChoice}Btn`).style.fontWeight = 'bold';
    document.getElementById(`${playerChoice}Btn`).style.border = '2px solid #fff';

    let resultText = '';
    let resultColor = '';

    if (playerChoice === computerChoice) {
        resultText = "It's a tie!";
        resultColor = '#ffd700'; 
        ties++;
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        resultText = 'You won!';
        resultColor = '#00ff00'; 
        wins++;
    } else {
        resultText = 'You lost!';
        resultColor = '#ff6347'; 
        losses++;
    }

    document.getElementById('Results').innerHTML = resultText;
    document.getElementById('Results').style.color = resultColor;

    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('loseCount').innerHTML = losses;
    document.getElementById('tieCount').innerHTML = ties;

    attempts++;
    document.getElementById('attemptCount').innerHTML = attempts;
}

function reset() {
    wins = 0;
    losses = 0;
    ties = 0;
    attempts = 0;

    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('loseCount').innerHTML = losses;
    document.getElementById('tieCount').innerHTML = ties;
    document.getElementById('attemptCount').innerHTML = attempts;

    document.getElementById('Moves').innerHTML = '';
    document.getElementById('Results').innerHTML = '';
    
    resetButtonStyles();
}

function resetButtonStyles() {
    document.getElementById('stoneBtn').style.fontWeight = 'normal';
    document.getElementById('paperBtn').style.fontWeight = 'normal';
    document.getElementById('scissorBtn').style.fontWeight = 'normal';

    document.getElementById('stoneBtn').style.border = 'none';
    document.getElementById('paperBtn').style.border = 'none';
    document.getElementById('scissorBtn').style.border = 'none';
}
