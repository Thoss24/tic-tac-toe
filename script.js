// Game-board module
let gameBoard = (function() {
    'use strict'

    let ticTacToeBoard = {
        board: [],
    };

    let playerChoice = {
        getChoice() {
            return this.choice;
        },
    };
    
    // Players, factory-function
    function players(choice) {
       let player = Object.create(playerChoice);
       player.choice = choice;
       return player
    };

    let playerX = players('X');
    let playerO = players('O');

    // create tic-tac-toe board & append "X" or "O" on click event
    function createBoard() {

        let board = document.querySelector('#board-container');
    
        for (let i = 0; i < 9; i++) {
            let boardSquare = document.createElement('div');
            boardSquare.style.border = '1px solid black'
            board.style.gridTemplateColumns = `repeat(3, 1fr)`;
            board.style.gridTemplateRows = `repeat(3, 1fr)`;

            boardSquare.addEventListener('click', () => {
                boardSquare.textContent = playerX.getChoice();
            })
        
            board.appendChild(boardSquare)
        };
    }
    createBoard();


    
    return {
        ticTacToeBoard: ticTacToeBoard
    };

})();







