
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

let tokenChoice = (function() {

    let buttonSelection = {
    buttonX: document.querySelector('#choice-x'),
    buttonO: document.querySelector('#choice-o'),
    }
    console.log(buttonSelection)

    let playerChoice = {
        playerX: players('X'),
        playerO: players('O'),
    }
    console.log(playerChoice)

    buttonSelection.buttonX.addEventListener('click', (e) => {
        console.log(e.target);
    });

    buttonSelection.buttonO.addEventListener('click', (e) => {
        console.log(e.target);
    });

    return {
        buttonSelection: buttonSelection,
        playerChoice: playerChoice,
    }

})();



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
            boardSquare.textContent = players('X').getChoice()
        })
        
        board.appendChild(boardSquare)
    };
}
    createBoard();
    
        return {
            ticTacToeBoard: ticTacToeBoard
        };

})();







