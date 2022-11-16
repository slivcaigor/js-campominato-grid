/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/



const selectDifficulty = document.getElementById("select_difficulty");
const squaresContainer = document.querySelector(".container");
const startGame = document.getElementById("play");


startGame.addEventListener("click", function () {

  squaresContainer.innerHTML = "";

  const difficulty = selectDifficulty.value;

  const totalSquares = numSquares(difficulty);

  for (let i = 0; i < totalSquares; i++) {

    const square = document.createElement("div");
    const squareNumber = document.createElement("span");

    square.classList.add("box");
    squareNumber.textContent = i + 1;

    squaresContainer.append(square);
    square.append(squareNumber);
    square.addEventListener("click", squareClick);
  };
});



function numSquares(difficulty) {

  if (parseInt(difficulty) === 1) {
    let numSquares = 100;
    return numSquares;
  }
  if (parseInt(difficulty) === 2) {
    let numSquares = 81;
    return numSquares;
  }
  if (parseInt(difficulty) === 3) {
    let numSquares = 49;
    return numSquares;
  }
};


function squareClick() {
  this.classList.toggle("clicked");
}
