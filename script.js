function Players(choice) {
   this.choice = choice;
   
   const getChoice = () => {
    return choice
   };

   return { getChoice }
};


const gameBoard = (function() {
    'use strict'

    let ticTacToeBoard = ["", "", "", "", "", "", "", "", ""];

    const setBoardChoice = (boardIndex, choice) => {
        if (boardIndex > ticTacToeBoard.length) return;
        ticTacToeBoard[boardIndex] = choice
    }

    const getBoardChoice = (boardIndex) => {
        if (boardIndex > ticTacToeBoard.length) return;
        return ticTacToeBoard[boardIndex]
    }

    return {
        setBoardChoice,
        getBoardChoice
    }
})();

const displayController = (() => {

    let boardSquare = document.querySelectorAll('.board-square');
    boardSquare.forEach((square) => square.addEventListener('click', (e) => {
        gameFlow.gameTurn(parseInt(e.target.id));
        displayBoardChoice()
    }));

    const displayBoardChoice = () => {
        for (let i = 0; i < boardSquare.length; i++) {
            boardSquare[i].textContent = gameBoard.getBoardChoice(i)
        }
    }
    
    return {
        displayBoardChoice
    }
})();


const gameFlow = (() => {
    const playerX = Players('X');
    const playerO = Players('O');

    

    const gameTurn = (boardPosition) => {
        gameBoard.setBoardChoice(boardPosition, getPlayerChoice());
        console.log(getPlayerChoice(), boardPosition.id);
    }
    
    const getPlayerChoice = () => {
        return playerX.getChoice()
    }

    return {
        gameTurn, 
        getPlayerChoice
    }

})();





