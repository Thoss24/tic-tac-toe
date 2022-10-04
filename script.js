function Players(choice) {
   this.choice = choice;
   
   const getChoice = () => {
    return choice
   };

   return { getChoice }
};


const gameBoard = (function() {
    'use strict'

    let ticTacToeBoard = ["X1", "X2", "X3", "O4", "O5", "O6", "X7", "X8", "X9"];

    const setBoardChoice = (boardIndex, choice) => {
        ticTacToeBoard[boardIndex] = choice
    }

    return {
        setBoardChoice
    }
})();

const displayController = (() => {

    let boardSquare = document.querySelectorAll('.board-square');
    boardSquare.forEach((square) => square.addEventListener('click', (e) => {
        gameFlow.gameTurn(e.target)
    }));

    return {
        boardSquare: boardSquare,
    }
})();


const gameFlow = (() => {
    const playerX = Players('X');
    const playerO = Players('O');

    const gameTurn = (boardPosition) => {
        gameBoard.setBoardChoice(boardPosition, getPlayerChoice());
        console.log(getPlayerChoice(), boardPosition)
    }
    
    
    const getPlayerChoice = () => {
        return playerX.getChoice()
    }

    return {
        gameTurn
    }

})();





