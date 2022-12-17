// Set up the chess board using a two-dimensional array
let board = [  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];

// Function to draw the board
function drawBoard() {
  // Get a reference to the table element

  const table = document.getElementById("chess-board");

  // Loop through the board array and add a cell for each square
  for (let row = 0; row < board.length; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < board[row].length; col++) {
      const td = document.createElement("td");
      // Add the piece image, if there is a piece on this square
      if (board[row][col] !== " ") {
        td.innerHTML = `<img  style='background-color:red;height:50px' src='images/${board[row][col]}.png'>`;
      }
      else{
        td.innerHTML="<div id='tableData' style='background-color:red;height:50px'></div>";
      }
      tr.appendChild(td);
    }
    console.log(table);
    table.appendChild(tr);
  }
}

// Function to handle user input and move the pieces
function movePiece(fromRow, fromCol, toRow, toCol) {
  // Make sure the move is legal
  if (!isLegalMove(fromRow, fromCol, toRow, toCol)) {
    // Update the board array to reflect the move
    board[toRow][toCol] = board[fromRow][fromCol];
    board[fromRow][fromCol] = " ";
    //
// Redraw the board to reflect the move
    // let element = document.getElementById("container");
    // element.remove();
    // var gfg_down =document.getElementById("chess-board");
    // gfg_down.parentNode.removeChild(gfg_down);
    drawBoard();
    } else {
        // Show an error message if the move is not legal
        alert("Illegal move!");
    }
}

// Function to check if a move is legal
function isLegalMove(fromRow, fromCol, toRow, toCol) {
  // Check if the destination square is empty or contains an enemy piece
//   console.log(isEnemyPiece(board[fromRow][fromCol], board[toRow][toCol]));
  if (board[toRow][toCol] === " " || isEnemyPiece(board[fromRow][fromCol], board[toRow][toCol])) {
    // Check the specific rules for each piece
    switch (board[fromRow][fromCol]) {
      case "P":
        return isLegalPawnMove(fromRow, fromCol, toRow, toCol);
      case "R":
        return isLegalRookMove(fromRow, fromCol, toRow, toCol);
      case "N":
        return isLegalKnightMove(fromRow, fromCol, toRow, toCol);
      case "B":
        return isLegalBishopMove(fromRow, fromCol, toRow, toCol);
      case "Q":
        return isLegalQueenMove(fromRow, fromCol, toRow, toCol);
      case "K":
        return isLegalKingMove(fromRow, fromCol, toRow, toCol);
      default:
        return false;
    }
  } else {
    return false;
  }
}

// Functions to check the specific rules for each piece's moves
function isLegalPawnMove(fromRow, fromCol, toRow, toCol) {
    // Pawns can only move forward, not backward
  if (fromRow > toRow) {
    return false;
  }

  // Pawns can move forward one square if that square is unoccupied
  if (fromRow + 1 === toRow && fromCol === toCol) {
    return true;
  }

  // Pawns can move forward two squares on their first move if both squares are unoccupied
  if (fromRow === 1 && toRow === 3 && fromCol === toCol) {
    return true;
  }

  // Pawns can capture pieces on adjacent squares diagonally in front of them
  if (Math.abs(fromCol - toCol) === 1 && fromRow + 1 === toRow) {
    return true;
  }

  return false;
  // ...
}

function isLegalRookMove(fromRow, fromCol, toRow, toCol) {
  // Rooks can move horizontally or vertically any number of squares as long as the path is unobstructed
  if (fromRow === toRow || fromCol === toCol) {
    return true;
  }
  return false;
}

function isLegalKnightMove(fromRow, fromCol, toRow, toCol) {
  // ...
}

function isLegalBishopMove(fromRow, fromCol, toRow, toCol) {
  // ...
}

function isLegalQueenMove(fromRow, fromCol, toRow, toCol) {
  // ...
}

function isLegalKingMove(fromRow, fromCol, toRow, toCol) {
  // ...
}

// Function to check if a piece is an enemy piece
function isEnemyPiece(piece, enemyPiece) {
  // Check if the colors of the pieces are different
  return (piece.toLowerCase() === piece && enemyPiece.toUpperCase() === enemyPiece) ||
         (piece.toUpperCase() === piece && enemyPiece.toLowerCase() === enemyPiece);
}

// Call the drawBoard function to draw the initial board
drawBoard();
