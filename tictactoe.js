// Make it work in the console before messing with the DOM
// Steps:
// Create an empty board
// Create a function which takes in a number to select a square
// Make sure it alternates between O and X markers

const gameBoard = (function() {
    let cell = 0;
    let rows = 3;
    let columns = 3;
    let board = [];

    for (i = 0; i < rows; i++) {
        board[i] = [];
        for (j = 0; j < columns; j++) {
            board[i].push(cell);
        }
    }
    return {board}
})();

const O = (function() {
    let marker = "O";
    return {marker}}
)();

const X = (function() {
    let marker = "X";
    return {marker}}
)();

const makeMove = (function(player, row, column) {
    gameBoard.board[row][column] = player.marker;
    return gameBoard.board;
})

// row 0 [0 1 2]
// row 1 [0 1 2]
// row 2 [0 1 2]

let winner;

winnerAnnounce = function() {
    console.log(`The winner is ${winner}`)
}

const gameController = function(){

if ((gameBoard.board[0][0] === "X" && gameBoard.board[0][1] === "X" && gameBoard.board [0][2] === "X") ||
(gameBoard.board[1][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [1][2] === "X") ||
(gameBoard.board[2][0] === "X" && gameBoard.board[2][1] === "X" && gameBoard.board [2][2] === "X") ||
(gameBoard.board[0][0] === "X" && gameBoard.board[1][0] === "X" && gameBoard.board [2][0] === "X") ||
(gameBoard.board[0][1] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [1][2] === "X") ||
(gameBoard.board[0][2] === "X" && gameBoard.board[1][2] === "X" && gameBoard.board [2][2] === "X") ||
(gameBoard.board[0][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [2][2] === "X") ||
(gameBoard.board[2][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [0][2] === "X")) {

    winner = X.marker;
    winnerAnnounce()

} else if ((gameBoard.board[0][0] === "O" && gameBoard.board[0][1] === "O" && gameBoard.board [0][2] === "O") ||
(gameBoard.board[1][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [1][2] === "O") ||
(gameBoard.board[2][0] === "O" && gameBoard.board[2][1] === "O" && gameBoard.board [2][2] === "O") ||
(gameBoard.board[0][0] === "O" && gameBoard.board[1][0] === "O" && gameBoard.board [2][0] === "O") ||
(gameBoard.board[0][1] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [1][2] === "O") ||
(gameBoard.board[0][2] === "O" && gameBoard.board[1][2] === "O" && gameBoard.board [2][2] === "O") ||
(gameBoard.board[0][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [2][2] === "O") ||
(gameBoard.board[2][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [0][2] === "O")) 

 { winner = O.marker; 
 winnerAnnounce()

 } else if (gameBoard.board[0][0] !== 0 && gameBoard.board[0][1] !== 0 && gameBoard.board[0][2] !== 0
&& gameBoard.board[1][0] !== 0 && gameBoard.board[1][1] !== 0 && gameBoard.board[1][2] !== 0
&& gameBoard.board[2][0] !== 0 && gameBoard.board[2][1] !== 0 && gameBoard.board[2][2] !== 0)

{winner = "No one";
winnerAnnounce()}}
