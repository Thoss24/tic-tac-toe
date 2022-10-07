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
        resetBoardChoice,
        ticTacToeBoard
    }
})();

const displayController = (() => {

    const boardSquare = document.querySelectorAll('.board-square');
    boardSquare.forEach((square) => square.addEventListener('click', (e) => {
        if (e.target.textContent !== "") return;
        gameFlow.gameTurn(e.target.id);
        displayBoardChoice();
        gameFlow.announceRound()
    }));

    const displayBoardChoice = () => {
        for (let i = 0; i < boardSquare.length; i++) {
            boardSquare[i].textContent = gameBoard.getBoardChoice(i);
        }
    };

    const resetButton = document.getElementById('reset-button');
        resetButton.addEventListener('click', () => {
            gameBoard.resetBoardChoice(),
            gameFlow.resetTurn(),
            gameFlow.roundAnnounce.textContent = "Player X's Turn",
            displayBoardChoice()
        })

        return {
            displayBoardChoice,
            boardSquare,
        }
    })
    
    ();

const gameFlow = (() => {
    const playerX = Players('X');
    const playerO = Players('O');
    let userTurn = 1;

    const gameTurn = (boardPosition) => {
        gameBoard.setBoardChoice(boardPosition, getPlayerChoice());
        if (gameOutcome(boardPosition)) {
            alert("You win")
            
        }
        userTurn ++;
    }
    
    const getPlayerChoice = () => {
        return userTurn % 2 === 1 ? playerX.getChoice() : playerO.getChoice();
    }

    let roundAnnounce = document.getElementById('round-announce');
    let announceRound = () => {
        if (userTurn % 2 === 1) {
            roundAnnounce.textContent = "Player X's Turn";
        } else {
            roundAnnounce.textContent = "Player O's Turn"
        }
    }
    announceRound()

    const resetTurn = () => {
        userTurn = 1
    }

    const gameOutcome = (field) => {
    
    let winCondition = [
        ["0", "1", "2"],
        ["0", "3", "6"],
        ["0", "4", "8"],
        ["2", "4", "6"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["1", "4", "7"],
        ["2", "5", "8"]
    ];

    return winCondition.filter((combo) => combo.includes(field)).some((possCombo) => possCombo.every((boardIndex) => gameBoard.getBoardChoice(boardIndex) === getPlayerChoice()))
     

    };
    gameOutcome()

    return {
        gameTurn, 
        getPlayerChoice, 
        announceRound,
        resetTurn, 
        gameOutcome,
        roundAnnounce
    }

})();




