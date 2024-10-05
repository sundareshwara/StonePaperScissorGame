let wins = 0;
let losses = 0;
let ties = 0;
let attempts = 0;
let userName = '';

function startGame() {
    userName = document.getElementById('username').value;
    if (userName.trim() === '') {
        alert('Please enter your name to start the game.');
        return;
    }

    document.getElementById('greeting').innerHTML = `Welcome, ${userName}! Let's Play Stone Paper Scissors!`;
    document.getElementById('greeting-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
}

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
    document.getElementById('finalAttemptCount').innerHTML = attempts; // Updated to show attempts
}

function reset() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('achievement-section').style.display = 'block';

    const achievementMessage = `Hey ${userName}, here are your achievements!`;
    document.getElementById('achievement-message').innerHTML = achievementMessage;

    document.getElementById('finalWinCount').innerHTML = wins;
    document.getElementById('finalLossCount').innerHTML = losses;
    document.getElementById('finalTieCount').innerHTML = ties;
    document.getElementById('finalAttemptCount').innerHTML = attempts;

    const consolidatedMessage = getConsolidatedResult(wins, losses, ties);
    document.getElementById('consolidated-result').innerHTML = consolidatedMessage;
}

function getConsolidatedResult(wins, losses, ties) {
    if (wins > losses) {
        return `Congratulations, ${userName}! You are the champion with ${wins} wins! 🏆`;
    } else if (losses > wins) {
        return `Don't worry, ${userName}. You gave it your best shot with ${losses} losses. Keep trying! 💪`;
    } else {
        return `It's a tie, ${userName}! With ${ties} ties, you're equally matched with your opponent! 🤝`;
    }
}

function continueGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    attempts = 0;

    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('loseCount').innerHTML = losses;
    document.getElementById('tieCount').innerHTML = ties;
    document.getElementById('finalAttemptCount').innerHTML = attempts;

    document.getElementById('achievement-section').style.display = 'none';
    document.getElementById('greeting-section').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('Moves').innerHTML = '';
    document.getElementById('Results').innerHTML = '';
    resetButtonStyles();
}

function resetButtonStyles() {
    const buttons = ['stoneBtn', 'paperBtn', 'scissorBtn'];
    buttons.forEach(button => {
        document.getElementById(button).style.fontWeight = 'normal';
        document.getElementById(button).style.border = 'none';
    });
}
