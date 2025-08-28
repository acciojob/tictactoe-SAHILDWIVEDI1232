let currentPlayer = 'x';
    let player1, player2;
    let gameOver = false;

    const submitButton = document.getElementById('submit');
    const messageDiv = document.getElementById('message');
    const cells = document.querySelectorAll('.cell');
    const gameArea = document.getElementById('game-area');
    const inputArea = document.getElementById('input-area');

    gameArea.style.display = 'none';

    submitButton.addEventListener('click', () => {
      player1 = document.getElementById('player1').value.trim();
      player2 = document.getElementById('player2').value.trim();

      if (!player1 || !player2) {
        alert('Please enter both player names.');
        return;
      }

      inputArea.style.display = 'none';
      gameArea.style.display = 'block';
      messageDiv.innerText = `${player1}, you're up`;
    });

    cells.forEach(cell => {
      cell.addEventListener('click', handleMove);
    });

    function handleMove(e) {
      const cell = e.target;
      if (gameOver || cell.innerText !== '') return;

      cell.innerText = currentPlayer;

      const winnerSymbol = checkWinner();
      if (winnerSymbol) {
        const winnerName = winnerSymbol === 'x' ? player1 : player2;
        messageDiv.innerText = `${winnerName} congratulations you won!`;
        gameOver = true;
        return;
      }

      if (isDraw()) {
        messageDiv.innerText = "It's a draw!";
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      const nextPlayer = currentPlayer === 'x' ? player1 : player2;
      messageDiv.innerText = `${nextPlayer}, you're up`;
    }

    function checkWinner() {
      const winCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ];

      for (let combo of winCombos) {
        const [a, b, c] = combo;
        const valA = document.getElementById(a).innerText;
        const valB = document.getElementById(b).innerText;
        const valC = document.getElementById(c).innerText;

        if (valA && valA === valB && valA === valC) {
          return valA; // 'x' or 'o'
        }
      }

      return null;
    }

    function isDraw() {
      return [...cells].every(cell => cell.innerText !== '');
    }