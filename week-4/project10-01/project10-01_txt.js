"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Joe Akindele
      Date:   April 12, 2025

      Filename: project10-01.js
*/

let puzzleBoard = document.getElementById("puzzleBoard");
let zCounter = 1;
let intList = new Array(48);
let pointerX, pointerY, pieceX, pieceY;

for (let i = 0; i < 48; i++) {
   intList[i] = i + 1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i + 1) / 8);
   let colNum = (i + 1) - (rowNum - 1) * 8;
   piece.style.top = (rowNum - 1) * 98 + 7 + "px";
   piece.style.left = (colNum - 1) * 98 + 7 + "px";
   piece.draggable = false;
   puzzleBoard.appendChild(piece);      
}

let pieces = document.querySelectorAll("div#puzzleBoard img");

for (let piece of pieces) {
   piece.addEventListener("pointerdown", grabPiece);
}

function grabPiece(e) {
   e.target.style.zIndex = zCounter++;
   pointerX = e.clientX;
   pointerY = e.clientY;
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;
   e.target.setPointerCapture(e.pointerId);
   e.target.addEventListener("pointermove", movePiece);
   e.target.addEventListener("pointerup", dropPiece);
}

function movePiece(e) {
   let dx = e.clientX - pointerX;
   let dy = e.clientY - pointerY;
   e.target.style.left = (pieceX + dx) + "px";
   e.target.style.top = (pieceY + dy) + "px";
}

function dropPiece(e) {
   e.target.removeEventListener("pointermove", movePiece);
   e.target.removeEventListener("pointerup", dropPiece);
   e.target.releasePointerCapture(e.pointerId);
}