// Make it work in the console before messing with the DOM

// Steps:
// Create an empty board
// Create a function which takes in a number to select a square
// Make sure it alternates between O and X markers

// Setting up the game board object with empty cells
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

// Body reference
const body = document.querySelector("body");

// Set up the grid hierarchy in the DOM
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

// Function that updates DOM relating to the content of the game board cells
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

// Initiating to show the empty cells
updateDOM();

// Setting up different players and their markers
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

// Setting the active player to be X
let activePlayer = players[0];

// Function for making a move, with respect to the row & column of choice
const makeMove = (function(row, column) {

    // Function that alternates player turns
    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1]
        } else if (activePlayer === players[1]) {
            activePlayer = players[0]
        }
    }

    // Condition that makes sure the target cell is empty
    if (gameBoard.board[row][column] !== "X" && gameBoard.board[row][column] !== "O") {

        // Updates the board with the active player's marker
    gameBoard.board[row][column] = activePlayer.marker

    // Or, if you chose a target cell already occupied, you waste a go! Brutal!
} else {console.log("You can't play there! You wasted your turn!!!")}

// Updates the display, alternates player, and checks board against win conditions
    updateDOM();
    switchPlayerTurn();
    checkWin();
    return gameBoard.board;
})

// Initiate the winner variable
let winner;

// Function to announce the winner
winnerAnnounce = function() {
    console.log(`The winner is ${winner}`)
}

// Function to compare against various win conditions & if one is met, trigger announcement
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
    winnerAnnounce()}
}

// Adding click events to trigger makeMove function, which also updates the DOM
cell00.addEventListener("click", () => makeMove(0,0))
cell01.addEventListener("click", () => makeMove(0,1))
cell02.addEventListener("click", () => makeMove(0,2))
cell10.addEventListener("click", () => makeMove(1,0))
cell11.addEventListener("click", () => makeMove(1,1))
cell12.addEventListener("click", () => makeMove(1,2))
cell20.addEventListener("click", () => makeMove(2,0))
cell21.addEventListener("click", () => makeMove(2,1))
cell22.addEventListener("click", () => makeMove(2,2))


// Making a reset button
const resetButton = document.createElement("button");
resetButton.innerHTML = "RESET"
body.appendChild(resetButton);

// Adding functionality to reset button
resetButton.addEventListener("click", () => {
    gameBoard.board = [["","",""],["","",""],["","",""]];
    updateDOM();
})