// Make it work in the console before messing with the DOM
// Steps:
// Create an empty board
// Create a function which takes in a number to select a square
// Make sure it alternates between O and X markers

// DOM set-up

const gameBoard = (function() {
    let cell = "";
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

const body = document.querySelector("body");

// Set up the grid hierarchy
const grid = document.createElement("div");
grid.setAttribute("class", "grid");

const cell00 = document.createElement("div");
const cell01 = document.createElement("div");
const cell02 = document.createElement("div");
const cell10 = document.createElement("div");
const cell11 = document.createElement("div");
const cell12 = document.createElement("div");
const cell20 = document.createElement("div");
const cell21 = document.createElement("div");
const cell22 = document.createElement("div");

cell00.setAttribute("class", "cell");
cell01.setAttribute("class", "cell");
cell02.setAttribute("class", "cell");
cell10.setAttribute("class", "cell");
cell11.setAttribute("class", "cell");
cell12.setAttribute("class", "cell");
cell20.setAttribute("class", "cell");
cell21.setAttribute("class", "cell");
cell22.setAttribute("class", "cell");

body.appendChild(grid);
grid.appendChild(cell00);
grid.appendChild(cell01);
grid.appendChild(cell02);
grid.appendChild(cell10);
grid.appendChild(cell11);
grid.appendChild(cell12);
grid.appendChild(cell20);
grid.appendChild(cell21);
grid.appendChild(cell22);

function updateDOM() {
    cell00.innerHTML = gameBoard.board[0][0];
    cell01.innerHTML = gameBoard.board[0][1];
    cell02.innerHTML = gameBoard.board[0][2];
    cell10.innerHTML = gameBoard.board[1][0];
    cell11.innerHTML = gameBoard.board[1][1];
    cell12.innerHTML = gameBoard.board[1][2];
    cell20.innerHTML = gameBoard.board[2][0];
    cell21.innerHTML = gameBoard.board[2][1];
    cell22.innerHTML = gameBoard.board[2][2];
}

updateDOM();

const players = [
    {
        name: "Player One",
        marker: "X"
    },
    {
        name: "Player Two",
        marker: "O"
    }
];

let activePlayer = players[0];

const makeMove = (function(row, column) {

    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1]
        } else if (activePlayer === players[1]) {
            activePlayer = players[0]
        }
    }

    if (gameBoard.board[row][column] !== "X" && gameBoard.board[row][column] !== "O") {
    gameBoard.board[row][column] = activePlayer.marker
} else {console.log("You can't play there! You wasted your turn!!!")}

    updateDOM();
    switchPlayerTurn();
    checkWin();
    return gameBoard.board;
})

cell00.addEventListener("click", () => makeMove(0,0))
cell01.addEventListener("click", () => makeMove(0,1))
cell02.addEventListener("click", () => makeMove(0,2))
cell10.addEventListener("click", () => makeMove(1,0))
cell11.addEventListener("click", () => makeMove(1,1))
cell12.addEventListener("click", () => makeMove(1,2))
cell20.addEventListener("click", () => makeMove(2,0))
cell21.addEventListener("click", () => makeMove(2,1))
cell22.addEventListener("click", () => makeMove(2,2))

// row 0 [0 1 2]
// row 1 [0 1 2]
// row 2 [0 1 2]

let winner;

winnerAnnounce = function() {
    console.log(`The winner is ${winner}`)
}

const checkWin = function(){

    if ((gameBoard.board[0][0] === "X" && gameBoard.board[0][1] === "X" && gameBoard.board [0][2] === "X") ||
    (gameBoard.board[1][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [1][2] === "X") ||
    (gameBoard.board[2][0] === "X" && gameBoard.board[2][1] === "X" && gameBoard.board [2][2] === "X") ||
    (gameBoard.board[0][0] === "X" && gameBoard.board[1][0] === "X" && gameBoard.board [2][0] === "X") ||
    (gameBoard.board[0][1] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [1][2] === "X") ||
    (gameBoard.board[0][2] === "X" && gameBoard.board[1][2] === "X" && gameBoard.board [2][2] === "X") ||
    (gameBoard.board[0][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [2][2] === "X") ||
    (gameBoard.board[2][0] === "X" && gameBoard.board[1][1] === "X" && gameBoard.board [0][2] === "X")) {

        winner = players[0].name;
        winnerAnnounce()

    } else if ((gameBoard.board[0][0] === "O" && gameBoard.board[0][1] === "O" && gameBoard.board [0][2] === "O") ||
    (gameBoard.board[1][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [1][2] === "O") ||
    (gameBoard.board[2][0] === "O" && gameBoard.board[2][1] === "O" && gameBoard.board [2][2] === "O") ||
    (gameBoard.board[0][0] === "O" && gameBoard.board[1][0] === "O" && gameBoard.board [2][0] === "O") ||
    (gameBoard.board[0][1] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [1][2] === "O") ||
    (gameBoard.board[0][2] === "O" && gameBoard.board[1][2] === "O" && gameBoard.board [2][2] === "O") ||
    (gameBoard.board[0][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [2][2] === "O") ||
    (gameBoard.board[2][0] === "O" && gameBoard.board[1][1] === "O" && gameBoard.board [0][2] === "O")) 

    { winner = players[1].name; 
    winnerAnnounce()

    } else if (gameBoard.board[0][0] !== "" && gameBoard.board[0][1] !== "" && gameBoard.board[0][2] !== ""
    && gameBoard.board[1][0] !== "" && gameBoard.board[1][1] !== "" && gameBoard.board[1][2] !== ""
    && gameBoard.board[2][0] !== "" && gameBoard.board[2][1] !== "" && gameBoard.board[2][2] !== "")

    {winner = "No one";
    winnerAnnounce()}}

const resetButton = document.createElement("button");
resetButton.innerHTML = "RESET"
body.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    gameBoard.board = [["","",""],["","",""],["","",""]];
    updateDOM();
})