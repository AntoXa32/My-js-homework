"use strict";

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const valueIndex = array.indexOf(value);
//   const index = valueIndex + 1;
//   if (valueIndex === -1) {
//     return [];
//   } else {
//     return array.slice(0, index);
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));

// function createArrayOfNumbers(min, max) {
//   let number = [];
//   for (let index = min; index <= max; index += 1) {
//     number.push(index);
//   }
//   return number;
// }

// console.log(createArrayOfNumbers(14, 17));

// function calculateTotalPrice(order) {
//   let number = 0;
//   for (let index = 0; index < order.length; index++) {
//     number += order[index];
//   }
//   return number;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let number = [];
//   for (let index = start; index <= end; index++) {
//     if (index % 2 === 0) {
//       number.push(index);
//     }
//   }
//   return number;
// }

// console.log(getEvenNumbers(8, 8));

// function getCommonElements(array1, array2) {
//   let array = [];
//   for (let index = 0; index < array1.length; index++) {
//     // console.log(array1[index]);

//     if (array2.includes(array1[index])) {
//       array.push(array1[index]);
//     }
//   }
//   return array;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const orders of order) {
//     sum += orders;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function createReversedArray() {
//   const args = Array.from(arguments);
//   const arg = args.toReversed();
//   return arg;
// }

// console.log(createReversedArray(412, 371, 94, 63, 176));
