// Make it work in the console before messing with the DOM
// Steps:
// Create an empty board
// Create a function which takes in a number to select a square
// Make sure it alternates between O and X markers

const gameBoard = (function() {
    let board = [" ", " "," "," "," "," "," "," "," "];
    return {board}
})();

const playerO = (function() {
    let marker = "O";
    return {marker}
})();

const playerX = (function() {
    let marker = "X";
    return {marker}
})();

const makeMove = (function(player, number) {
    gameBoard.board[number] = player.marker;
    return gameBoard.board;
})
