const sketchScreen = document.querySelector("#sketch-screen");
let gridSize = document.querySelector("input");
let square;
for (let i = 0; i < gridSize.value; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    sketchScreen.appendChild(square);
}