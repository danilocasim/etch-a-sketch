"use strict";

const gridContainer = document.querySelector("#grid");
const gridSizeBtn = document.querySelector("#size");
const clearBtn = document.querySelector("#clear");

function main() {
  let numPerRow = +prompt("Size:");

  generateBoxes(numPerRow);

  colorTheBox(generateRandomColor);
}

gridSizeBtn.addEventListener("click", () => {
  let anotherNumPerRow = +prompt("Size: ");
  removeBoxes();
  generateBoxes(anotherNumPerRow);
  colorTheBox(generateRandomColor);
});

clearBtn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.style.background = "white";
  });
});

function generateBoxes(numberOfRows) {
  if (numberOfRows > 100) return;

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      const box = document.createElement("div");
      box.classList = "box";
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

function generateRandomColor() {
  let randomNum = () => {
    return Math.floor(Math.random() * 255) + 1;
  };

  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

function colorTheBox(color) {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseleave", () => {
      box.style.background = color();
      console.log(e);
    });
  });
}

main();
