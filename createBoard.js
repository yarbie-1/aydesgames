

Create Grid
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
