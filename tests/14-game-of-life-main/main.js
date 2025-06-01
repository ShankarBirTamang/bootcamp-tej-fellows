//constants
const width = 40;
const height = 20; // width and height dimensions of the board
const gol = new GameOfLife(width, height); //instance of Game of life

//DOM Elements
const boardElement = document.getElementById("board");
const stepBtn = document.getElementById("step_btn");
const playBtn = document.getElementById("play_btn");
const pauseBtn = document.getElementById("pause_btn");
const randomizeBtn = document.getElementById("random_btn");
const clearBtn = document.getElementById("clear_btn");
const speedControl = document.getElementById("speed");
const generationElement = document.getElementById("generation");

// Create Board UI
const cells = [];

const table = document.createElement("tbody");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.dataset.row = h;
    td.dataset.col = w;
    cells.push(td);
    tr.append(td);
  }
  table.append(tr);
}
boardElement.append(table);

// Paint the board
const paint = () => {
  cells.forEach((td) => {
    const row = parseInt(td.dataset.row);
    const col = parseInt(td.dataset.col);
    const cellValue = gol.getCell(row, col);
    td.classList.toggle("alive", cellValue === 1);
  });
  generationElement.textContent = gol.generation;
};

/**
 * Event Listeners
 */

boardElement.addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    gol.toggleCell(
      parseInt(event.target.dataset.row),
      parseInt(event.target.dataset.col)
    );
    paint();
  }
});

stepBtn.addEventListener("click", (event) => {
  gol.tick();
  paint();
});

let interval = null;
playBtn.addEventListener("click", (event) => {
  if (!interval) {
    interval = setInterval(() => {
      gol.tick();
      paint();
    }, 1000 - speedControl.value);
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  }
});

pauseBtn.addEventListener("click", (event) => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
  }
});

randomizeBtn.addEventListener("click", (event) => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
  }
  gol.randomize();
  paint();
});

clearBtn.addEventListener("click", (event) => {
  // TODO: Clear the board and paint
});
