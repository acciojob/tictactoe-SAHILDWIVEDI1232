//your JS code here. If required.
let currentPlayer = 'X'; 
let player1, player2;

// Get elements
const submitButton = document.getElementById('submit');
const messageDiv = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
const gameArea = document.querySelector('.game-area');

submitButton.addEventListener('click', function() {
    player1 = document.getElementById('player-1').value;
    player2 = document.getElementById('player-2').value;
    messageDiv.innerText = `${player1}, you're up!`;
   gameArea.style.display = 'block';
});

// Event listener for each cell
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (!cell.innerText) { 
            cell.innerText = currentPlayer;
            const winner = checkWinner();
            if (winner) {
                messageDiv.innerText = `${winner} congratulations you won!`;
                cells.forEach(cell => cell.removeEventListener('click', arguments.callee)); // Disable further clicks
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle player
                messageDiv.innerText = currentPlayer === 'X' ? `${player1}, you're up!` : `${player2}, you're up!`;
            }
        }
    });
});

         
   


function checkWinner() {
  const winningCombinations = [
        [1, 2, 3], // Row 1
        [4, 5, 6], // Row 2
        [7, 8, 9], // Row 3
        [1, 4, 7], // Column 1
        [2, 5, 8], // Column 2
        [3, 6, 9], // Column 3
        [1, 5, 9], // Diagonal 1
        [3, 5, 7]  // Diagonal 2
    ];
}for (let i = 0; i < winningCombinations.length; i++) {
const combination = winningCombinations[i];
 const [a, b, c] = combination;
const cellA = document.getElementById(a).innerText;
        const cellB = document.getElementById(b).innerText;
        const cellC = document.getElementById(c).innerText;


if (cellA && cellA === cellB && cellA === cellC) {
            return cellA; 
        }
    }
    
    return null; 
}


















	