const board = document.getElementById('game-board');
const boardSize = 10; // 10x10 grid
let pacManPosition = 0;

// Create Grid
function createGrid() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        board.appendChild(square);

        // Add dots
        if (Math.random() > 0.8) {
            square.classList.add('dot');
        }
    }
}

// Move Pac-Man
function movePacMan(e) {
    const squares = document.querySelectorAll('.grid-square');
    squares[pacManPosition].classList.remove('pac-man');

    if (e.keyCode === 37 && pacManPosition % boardSize !== 0) { // left
        pacManPosition -= 1;
    }
    if (e.keyCode === 38 && pacManPosition - boardSize >= 0) { // up
        pacManPosition -= boardSize;
    }
    if (e.keyCode === 39 && pacManPosition % boardSize < boardSize - 1) { // right
        pacManPosition += 1;
    }
    if (e.keyCode === 40 && pacManPosition + boardSize < boardSize * boardSize) { // down
        pacManPosition += boardSize;
    }

    squares[pacManPosition].classList.add('pac-man');
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid();
    document.addEventListener('keyup', movePacMan);
});
