
const selectDifficulty = document.getElementById("select_difficulty");
const squaresContainer = document.querySelector(".container");
const startGame = document.getElementById("play");


startGame.addEventListener("click", function () {

  squaresContainer.innerHTML = "";

  const difficulty = selectDifficulty.value;

  const totalSquares = numSquares(difficulty);

  for (let i = 1; i <= totalSquares; i++) {

    const squareNumber = document.createElement("span");
    const square = document.createElement("div");

    square.classList.add("box");
    squareNumber.textContent = i;

    squaresContainer.append(square);
    square.append(squareNumber);

    square.addEventListener("click", function () {
      square.classList.toggle("clicked");
      console.log(i);
    });
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

