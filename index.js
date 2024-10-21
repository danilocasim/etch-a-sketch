"use strict";

const gridContainer = document.querySelector("#grid");
const gridSizeRange = document.querySelector("#gridSize");
const colorSelection = document.querySelector("#color");
const randomBtn = document.querySelector("#random");
const clearBtn = document.querySelector("#clear");

gridSizeRange.addEventListener("change", () => {
  removeBoxes();
  generateBoxes(gridSizeRange.value);
  colorTheBox(generateRandomColor);
});

colorSelection.addEventListener("change", () => {
  const color = colorSelection.value;
  colorTheBox(color);
});

randomBtn.addEventListener("click", () => {
  colorTheBox(generateRandomColor);
});

clearBtn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.style.backgroundColor = "#ffffff";
  });
});

function generateBoxes(numberOfRows) {
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

  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()}, 0.7)`;
}

function colorTheBox(color) {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      if (typeof color === "function") {
        box.style.background = color();
      } else {
        box.style.background = color;
        box.style.opacity = 0.7;
      }
    });
  });
}
