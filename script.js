// Game-board module
let gameBoard = (function() {
    'use strict'

    let ticTacToeBoard = {
        board: [],
    };

    // create tic-tac-toe board & append "X" or "O" on click event
    function createBoard() {

        let board = document.querySelector('#board-container');
    
        for (let i = 0; i < 9; i++) {
            let boardSquare = document.createElement('div');
            boardSquare.style.border = '1px solid black'
            board.style.gridTemplateColumns = `repeat(3, 1fr)`;
            board.style.gridTemplateRows = `repeat(3, 1fr)`;
    
            boardSquare.addEventListener('click', () => {
                boardSquare.textContent = 'X';
                ticTacToeBoard.board.push(boardSquare.textContent)
            });
    
            board.appendChild(boardSquare)
        };
    }
    createBoard()
    
    return {
        ticTacToeBoard: ticTacToeBoard
    };

})();


// Players, factory-function
const Player = (player) => {

}





