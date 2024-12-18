// const refs = {
//   swapButton: document.querySelector("#swapButton"),
//   leftSwapInput: document.querySelector("#leftSwapInput"),
//   rightSwapInput: document.querySelector("#rightSwapInput"),
// };

// refs.swapButton.addEventListener("click", onSwapButtonClick);

// function onSwapButtonClick(event) {
//   const leftInputValue = refs.leftSwapInput.value;
//   refs.leftSwapInput.value = refs.rightSwapInput.value;
//   refs.rightSwapInput.value = leftInputValue;
// }

// const refs = {
//   taskTitle: document.querySelector(".taskTitle"),
//   passwordButton: document.querySelector("#passwordButton"),
// };

// refs.passwordButton.addEventListener("click", onPasswordButtonClick);

// function onPasswordButtonClick(event) {
//   if (refs.passwordButton.textContent === "Розкрити") {
//     refs.taskTitle.style.display = "block";
//     refs.passwordButton.textContent = "Приховати";
//     return;
//   }

//   refs.taskTitle.style.display = "none";
//   refs.passwordButton.textContent = "Розкрити";
// }

const refs = {
  statList: document.querySelector(".statList"),
  resultSection: document.querySelector("#resultSection"),
  resultButton: document.querySelector("#resultButton"),
};
let sum = 0;
const statButtonClicks = {};
refs.statList.addEventListener("click", onStatListButtonClick);

function onStatListButtonClick(event) {
  const number = Number(event.target.dataset.number);
  sum += number;
  statButtonClicks[event.target.textContent] =
    (statButtonClicks[event.target.textContent] || 0) + 1;
  console.log(statButtonClicks);
}
