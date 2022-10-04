function Players(choice) {
   this.choice = choice;
   
   const getChoice = () => {
    return choice
   };

   return { getChoice }
};


let gameBoard = (function() {
    'use strict'

    let ticTacToeBoard = [];

    return {
            ticTacToeBoard: ticTacToeBoard,
    };

})();








