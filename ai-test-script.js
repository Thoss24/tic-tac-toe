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
     const resetButton = document.getElementById('reset-button');
     let showWinner = document.getElementById('announce-winner');
 
     boardSquare.forEach((square) => square.addEventListener('click', (e) => {
         if (gameFlow.stopGame()) return;
         gameFlow.gameTurn(e.target.id);
         displayBoardChoice();
         gameFlow.announceRound();
         gameFlow.userTurn++;
         gameFlow.announceDraw();
         randomMove()
     }));
 
     const displayBoardChoice = () => {
         for (let i = 0; i < boardSquare.length; i++) {
             boardSquare[i].textContent = gameBoard.getBoardChoice(i);
             }
     };
 
         resetButton.addEventListener('click', () => {
             gameBoard.resetBoardChoice(),
             gameFlow.resetTurn(),
             gameFlow.roundAnnounce.textContent = "Player X's Turn",
             displayBoardChoice(),
             showWinner.textContent = "",
             gameFlow.userTurn = 1;
         });
 
     let announceWinner = (gameWinner) => {
         displayWinner(`Player ${gameWinner} won the game!`);
     };
 
     let displayWinner = (winnerMsg) => {
         showWinner.textContent = winnerMsg;
     };

     function randomMove() {

        let cells = [];

       for (let i = 0; i < boardSquare.length; i ++) {
        if (boardSquare[i].textContent === "") cells.push(boardSquare[i])
       }
       
       console.log(cells[Math.floor(Math.random() * cells.length)].textContent = "O"); return
         
    }

         return {
             displayBoardChoice,
             boardSquare,
             announceWinner,
             displayWinner,
             showWinner, 
             randomMove
         }
     })
     ();
 
 const gameFlow = (() => {
     const playerX = Players('X');
     const playerO = Players('O');
     let userTurn = 1;
     let gameOver = false;
 
     const gameTurn = (boardPosition) => {
         gameBoard.setBoardChoice(boardPosition, getPlayerChoice());
         if (gameOutcome(boardPosition)) {
             displayController.announceWinner(getPlayerChoice());
             gameOver = true;
             return
         }
         userTurn ++;
     };
     
     const getPlayerChoice = () => {
        return playerX.getChoice()
     };
 
     let roundAnnounce = document.getElementById('round-announce');
     let announceRound = () => {
         if (userTurn % 2 === 1) {
             roundAnnounce.textContent = "Player X's Turn";
         } else {
             roundAnnounce.textContent = "Player O's Turn"
         };
     }
     announceRound()
 
     const announceDraw = () => {
         if (userTurn === 10) {
             gameOver = true;
             displayController.showWinner.textContent = "It's a draw!";
             return
         };
     }
 
     const resetTurn = () => {
         userTurn = 1;
         gameOver = false;
     };
 
     const stopGame = () => {
         return gameOver
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
         roundAnnounce,
         stopGame,
         announceDraw,
         userTurn
     }
 
 })();


 
