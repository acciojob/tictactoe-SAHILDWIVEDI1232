let currentPlayer = 'X';
let player1, player2;

const submitButton = document.getElementById('submit');
const messageDiv = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
const gameArea = document.querySelector('.game-area');


gameArea.style.display = 'none';


submitButton.addEventListener('click', function () {
    player1 = document.getElementById('player-1').value.trim();
    player2 = document.getElementById('player-2').value.trim();

    if (!player1 || !player2) {
        alert('Please enter both player names.');
        return;
    }

    messageDiv.innerText = `${player1}, you're up!`;
    gameArea.style.display = 'block';
});


cells.forEach(cell => {
    cell.addEventListener('click', handleMove);
});

function handleMove(e) {
    const cell = e.target;
    if (cell.innerText || checkWinner()) return;

    cell.innerText = currentPlayer;

    const winnerSymbol = checkWinner();
    if (winnerSymbol) {
        const winnerName = winnerSymbol === 'X' ? player1 : player2;
        messageDiv.innerText = `${winnerName}, congratulations you won!`;
        disableBoard();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const nextPlayer = currentPlayer === 'X' ? player1 : player2;
        messageDiv.innerText = `${nextPlayer}, you're up!`;
    }
}


function checkWinner() {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        const valA = document.getElementById(a).innerText;
        const valB = document.getElementById(b).innerText;
        const valC = document.getElementById(c).innerText;

        if (valA && valA === valB && valA === valC) {
            return valA; // 'X' or 'O'
        }
    }

    return null;
}


function disableBoard() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleMove);
    });
}
