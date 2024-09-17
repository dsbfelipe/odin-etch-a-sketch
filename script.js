const container = document.querySelector(".container");


function createGrid() {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
}

createGrid();