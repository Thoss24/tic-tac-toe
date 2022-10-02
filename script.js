let gameBoard = (function() {
    'use strict'

    let ticTacToeBoard = {
        board: [],
    }

})();


const Player = (player) => {

}


function createBoard() {
    let board = document.querySelector('#board-container');
    for (let i = 0; i < 9; i++) {
        let boardSquare = document.createElement('div');
        boardSquare.style.border = '1px solid black'
        board.style.gridTemplateColumns = `repeat(3, 1fr)`;
        board.style.gridTemplateRows = `repeat(3, 1fr)`;
        board.appendChild(boardSquare)
    }
    
}
createBoard()
