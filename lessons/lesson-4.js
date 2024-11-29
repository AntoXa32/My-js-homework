"use strict";

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   const keys = Object.keys(object);
//   const propCount = keys.length;
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2, mail: "poly@mail.com" }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const values = [];
//   for (const product of products) {
//     if (product[propName] === undefined) {
//       return [];
//     } else {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues("pric"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let prices = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       prices = product.price * product.quantity;
//       return prices;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Gri"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let prices = 0;
//     for (const potion of this.potions) {
//       prices += potion.price;
//     }
//     return prices;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };

// console.log(changeRating("The Mist", 9));

// changeRating("The Last Kingdom", 4);

// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(add(32, 6, 13, 19, 8));

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       sum += arg;
//     }
//   }
//   return sum;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);
//   return { best, worst };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
