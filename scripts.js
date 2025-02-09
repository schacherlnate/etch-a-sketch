function generateGrid(n) {
    const sketchScreen = document.querySelector("#sketch-screen");
    if (sketchScreen.hasChildNodes()) {
        sketchScreen.replaceChildren();
    }

    let square;
    for (let i = 0; i < n**2; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(100%/${n})`;
        square.style.height = `calc(100%/${n})`;
        square.textContent=i;
        square.addEventListener("mouseenter", function(e) {
            //knew correct target, each square had the listener, but value for square still saved
            e.target.style.backgroundColor="black";
        });
        sketchScreen.appendChild(square);
    }
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", function() {
    const gridSize = document.querySelector("input");
    generateGrid(gridSize.value);
});

let defaultSize = 16
generateGrid(defaultSize);