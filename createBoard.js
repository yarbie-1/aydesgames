const board = document.getElementById('game-board');
const walls = [1, 2, 4, 7, 8]; // Array of wall positions

// add walls to the grid
function addWallsAndGhosts() {
    const squares = document.querySelectorAll('.grid-square');
    walls.forEach(index => squares[index].classList.add('wall'));
}

// add a dot to a square
function addDots() {
    if (Math.random() > 0.8) {
        square.classList.add('dot')
    }
}

// create the grid the player navigates
function createGrid() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        board.appendChild(square);

        // Add dots
        addDots()
    }
}
