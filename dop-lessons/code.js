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

// const refs = {
//   statList: document.querySelector(".statList"),
//   resultSection: document.querySelector("#resultSection"),
//   resultButton: document.querySelector("#resultButton"),
// };
// let sum = 0;
// const statButtonClicks = {};
// refs.statList.addEventListener("click", onStatListButtonClick);

// function onStatListButtonClick(event) {
//   const number = Number(event.target.dataset.number);
//   sum += number;
//   statButtonClicks[event.target.textContent] =
//     (statButtonClicks[event.target.textContent] || 0) + 1;
//   console.log(statButtonClicks);
// }
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings);

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);

// localStorage.setItem("ui-theme", "dark");
// localStorage.removeItem("ui-thems");

// localStorage.clear();
const formEl = document.querySelector(".feedback-form");
const textarea = formEl.elements.message;
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

formEl.addEventListener("input", (event) => {
  localStorage.setItem(localStorageKey, event.target.value);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  formEl.reset();
});
