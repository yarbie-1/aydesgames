const board = document.getElementById('game-board');
const boardSize = 10; // 10x10 grid
let pacManPosition = 0;
let score = 0;
const walls = [1, 2, 4, 7, 8]; // Array of wall positions
let ghostPositions = [3, 6]; // Starting positions of ghosts

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

// Adding Walls and Ghosts
function addWallsAndGhosts() {
    const squares = document.querySelectorAll('.grid-square');
    walls.forEach(index => squares[index].classList.add('wall'));
    ghostPositions.forEach(index => squares[index].classList.add('ghost'));
}

// Check for Dot
function eatDot(square) {
    if (square.classList.contains('dot')) {
        square.classList.remove('dot');
        score += 10;
        // Update score display if you have one
    }
}

// Move Ghosts
function moveGhosts() {
    const squares = document.querySelectorAll('.grid-square');
    ghostPositions.forEach((pos, index) => {
        squares[pos].classList.remove('ghost');
        // Simple random movement
        let move = Math.floor(Math.random() * 4);
        if (move === 0 && pos % boardSize !== 0) ghostPositions[index] -= 1;
        if (move === 1 && pos - boardSize >= 0) ghostPositions[index] -= boardSize;
        if (move === 2 && pos % boardSize < boardSize - 1) ghostPositions[index] += 1;
        if (move === 3 && pos + boardSize < boardSize * boardSize) ghostPositions[index] += boardSize;
        squares[ghostPositions[index]].classList.add('ghost');
    });
}

// Move Pac-Man
function movePacMan(e) {
    const squares = document.querySelectorAll('.grid-square');
    squares[pacManPosition].classList.remove('pac-man');

    if (e.keyCode === 37 && pacManPosition % boardSize !== 0) { // left
        pacManPosition -= 1;
        eatDot(pacManPosition)
    }
    if (e.keyCode === 38 && pacManPosition - boardSize >= 0) { // up
        pacManPosition -= boardSize;
        eatDot(pacManPosition)
    }
    if (e.keyCode === 39 && pacManPosition % boardSize < boardSize - 1) { // right
        pacManPosition += 1;
        eatDot(pacManPosition)
        
    }
    if (e.keyCode === 40 && pacManPosition + boardSize < boardSize * boardSize) { // down
        pacManPosition += boardSize;
        eatDot(pacManPosition)
    }

    squares[pacManPosition].classList.add('pac-man');
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid();
    addWallsAndGhosts();
    document.addEventListener('keyup', movePacMan);
    setInterval(moveGhosts, 1000); // Move ghosts every second
});
