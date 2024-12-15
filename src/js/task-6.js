function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");

createEl.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Enter a number from 1 to 100");
  }
});

destroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const elements = [];

  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
    size += 10;
  }
  boxEl.append(...elements);
}

function destroyBoxes() {
  boxEl.innerHTML = "";
}
