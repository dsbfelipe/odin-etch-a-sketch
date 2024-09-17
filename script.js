const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
}

function getSquares() {
  const squareNodeList = document.querySelectorAll(".square");
  squareNodeList.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("paint");
    })
  })
}

button.addEventListener("click", () => {
  let height = window.prompt("Set the height in squares");
  if (height > 100) {
    alert("Please insert a value lower or equal to 100");
    height = window.prompt("Set the height in squares");
  }
  console.log(height);
  const base = window.prompt("Set the width in squares");
  if (base > 100) {
    alert("Please insert a value lower or equal to 100");
    base = window.prompt("Set the width in squares");
  }
  console.log(base);
  clearContainer();
  squareQuantity = setGridSize(base, height);
  console.log(squareQuantity)
  createGrid(squareQuantity);
  getSquares();
})

function setGridSize(base, height) {
  container.style.height = `${height * 10}px`;
  container.style.width = `${base * 10}px`;
  squareQuantity = base * height;
  return squareQuantity;
}

function clearContainer() {
  container.innerHTML = "";
}