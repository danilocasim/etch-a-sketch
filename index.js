"use strict";

const gridContainer = document.querySelector("#grid");
const btnGridSize = document.querySelector("#size");

let numPerRow = +prompt("Size:");

btnGridSize.addEventListener("click", () => {
  let anotherNumPerRow = +prompt("Size: ");
  removeBoxes();
  generateBoxes(anotherNumPerRow);
});

function generateBoxes(numberOfRows) {
  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      const box = document.createElement("div");
      box.classList = "box";
      box.style.border = "1px solid brown";
      gridContainer.appendChild(box);
    }
  }
  const boxes = document.querySelectorAll(".box");
  let gridWidth = gridContainer.offsetWidth;
  let gridHeight = gridContainer.offsetHeight;

  boxes.forEach((box) => {
    box.style.width = `${gridWidth / numberOfRows}px`;
    box.style.height = `${gridHeight / numberOfRows}px`;
  });
}

function removeBoxes() {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    box.remove();
  }
}

generateBoxes(numPerRow);
