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
    };

    const getBoardChoice = (boardIndex) => {
        if (boardIndex > ticTacToeBoard.length) return;
        return ticTacToeBoard[boardIndex]
    };

    const resetBoardChoice = () => {
        for (let i = 0; i < ticTacToeBoard.length; i++) {
            ticTacToeBoard[i] = ""
        }
    };

    return {
        setBoardChoice,
        getBoardChoice,
        resetBoardChoice
    }
})();

const displayController = (() => {

    const boardSquare = document.querySelectorAll('.board-square');
    boardSquare.forEach((square) => square.addEventListener('click', (e) => {
        gameFlow.gameTurn(e.target.id);
        displayBoardChoice()
    }));

    const displayBoardChoice = () => {
        for (let i = 0; i < boardSquare.length; i++) {
            boardSquare[i].textContent = gameBoard.getBoardChoice(i)
        }
    };

    const resetButton = document.getElementById('reset-button');
        resetButton.addEventListener('click', () => {
            gameBoard.resetBoardChoice(),
            displayBoardChoice()
        }
        
    )
    
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





