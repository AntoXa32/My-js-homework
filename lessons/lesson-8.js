"use strict";

// const arr = [1, 2, 3, 4];

// const bodyEl = document.querySelector("body");
// const divEl = document.createElement("div");
// divEl.id = "container";
// bodyEl.prepend(divEl);

// let currentDiv = divEl;

// arr.forEach((i) => {
//   const newDivEl = document.createElement("div");

//   const buttonEl = document.createElement("button");
//   buttonEl.style.padding = "20px 60px";
//   buttonEl.style.marginBottom = "10px";
//   buttonEl.textContent = `Click ${i}`;
//   buttonEl.style.color = "red";
//   buttonEl.style.fontWeight = 600;
//   buttonEl.style.fontSize = "30px";
//   newDivEl.appendChild(buttonEl);
//   currentDiv.appendChild(newDivEl);
//   currentDiv = newDivEl;
// });

// const parentEl = document.querySelector("#container");

// parentEl.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log(event.currentTarget);
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// ! Приклад з матеріалів навчання //

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;

//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }
// ! Приклад з матеріалів навчання //
// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// console.dir(_);

// const user = {
//   age: 20,
//   userName: "Anton",
//   firstName: "Yashchenko",
// };

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // const { age = 30, userName: name = "Roman", firstName } = user;
// // console.log(age, name, firstName);

// function userDrag(book) {
//   console.log(book.title, book.author, book.rating);
// }

// userDrag(book);

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
//   // І так далі
// }

// console.log(doStuffWithBook(book));

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(userViews); // 4827
// console.log(userLikes);

// const color = [200, 255, 100];
// const [red, green, blue, alfa = 0.3] = color;

// console.log(`rgb(${red}, ${green}, ${blue}, ${alfa})`);
// const color = [200, 255, 100];
// const [red, ...otherColors] = color;
// console.log(red);
// console.log(otherColors);

// const user = {
//   name: "Jacob",
//   age: 32,
//   email: "j.cob@mail.com",
//   isOnline: true,
// };

// const { name, age, ...other } = user;

// const rgb = [100, 200, 300, 400];
// const [, , four] = rgb;
// console.log(four);
