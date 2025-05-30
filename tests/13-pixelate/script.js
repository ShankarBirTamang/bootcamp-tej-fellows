// Your code here
/*
- adding a new element to html page
    - document.createElement
    - parentElement.appendChild(newElement)
- adding eventlistener to 'select' element
    - what event should we listen to?
- dragging to paint
    - mousedown: addEventListener
    - mouseover: do the action
    - mouseup: removeEventListener
*/

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("pixel-canvas");
  const colorPicker = document.getElementById("color-picker");
  let selectedColor = colorPicker.value;
  let isPainting = false;

  //Update selected color when changed
  colorPicker.addEventListener("change", function () {
    selectedColor = this.value;
  });

  //Add row button
  const addRowButton = document.getElementById("add-row");
  addRowButton.addEventListener("click", function () {
    const newRow = document.createElement("tr");
    const colCount = canvas.rows.length > 0 ? canvas.rows[0].cells.length : 1;

    for (let i = 0; i < colCount; i++) {
      const newCell = document.createElement("td");
      newCell.className = "pixel";
      newCell.style.width = "15px";
      newCell.style.height = "15px";
      newCell.style.backgroundColor = "#ffffff";
      newRow.appendChild(newCell);
    }
    canvas.appendChild(newRow);
  });

  //Add column button
  const addColumnButton = document.getElementById("add-col");
  addColumnButton.addEventListener("click", function () {
    const rows = canvas.rows;

    if (rows.length === 0) {
      const newRow = document.createElement("tr");
      const newCell = document.createElement("td");
      newCell.className = "pixel";
      newCell.style.width = "15px";
      newCell.style.height = "15px";
      newCell.style.backgroundColor = "#ffffff";
      newRow.appendChild(newCell);
      canvas.appendChild(newRow);
    } else {
      for (let row of rows) {
        const newCell = document.createElement("td");
        newCell.className = "pixel";
        newCell.style.width = "15px";
        newCell.style.height = "15px";
        newCell.style.backgroundColor = "#ffffff";
        row.appendChild(newCell);
      }
    }
  });

  //function to handle painting
  const paintPixel = (pixel) => {
    pixel.style.backgroundColor = selectedColor;
  };

  //mouse down : setup event listener for all table
  canvas.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("pixel")) {
      isPainting = true;
      paintPixel(e.target);
      e.preventDefault(); // prevent default behaviour (text selection)
    }
  });

  //mouse over : do the action
  canvas.addEventListener("mouseover", function (e) {
    if (isPainting && e.target.classList.contains("pixel")) {
      paintPixel(e.target);
      e.preventDefault();
    }
  });

  //mouse up : remove Event Listener
  canvas.addEventListener("mouseup", function () {
    isPainting = false;
  });

  //Erase all colored pixels
  document.getElementById("clear-all").addEventListener("click", function () {
    const allPixels = canvas.querySelectorAll("#pixel-canvas .pixel");
    allPixels.forEach((pixel) => {
      pixel.style.backgroundColor = "#ffffff"; //reset color to white
    });
  });

  //Remove all rows and columns
  //   document.getElementById("clear-all").addEventListener("click", function () {
  //     while (canvas.firstChild) {
  //       canvas.removeChild(canvas.firstChild);
  //     }
  //   });
});
