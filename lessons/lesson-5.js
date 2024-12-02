"use strict";

// const numbers = [1, 2, 3, 4, 5];

// const pureMultiply = numbers.map((number) => number + 2);
// console.log(pureMultiply);

// const numbers = [10, 20, 30, 40];

// const stringNumbers = numbers.map((number) => number.toString());

// console.log(stringNumbers);

// const numbers = [10, 20, 30, 40];

// const hellowNumbers = numbers.map((number) => `Привіт, ${number}`);

// console.log(hellowNumbers);

// const words = ["яблуко", "груша", "апельсин"];

// const lengthWords = words.map((word) => word.length);

// console.log(lengthWords);

// const prices = [10, 25.5, 100];

// const dollarPrice = prices.map((price) => `$${price}`);

// console.log(dollarPrice);

// const people = [
//   { name: "Оля", age: 25 },
//   { name: "Максим", age: 30 },
//   { name: "Аня", age: 22 },
// ];

// const peopleString = people.map(
//   (peoples) => `${peoples.name}: ${peoples.age} ears`
// );

// console.log(peopleString);

// const numbers = [1, 2, 3, 4, 5];

// const numbersObj = numbers.map((number) => {
//   return { value: number, isEven: number % 2 === 0 };
// });

// console.log(numbersObj);

// const strings = ["hello", "world", "javascript"];

// const upperString = strings.map((string) => string.toUpperCase());

// console.log(upperString);

// const users = [
//   { name: "Оля", age: 25 },
//   { name: "Максим", age: 30 },
//   { name: "Аня", age: 22 },
// ];

// const keyUsers = users.map((user) => user.name);

// console.log(keyUsers);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const studentsMap = students.map((student) => student.score);

// console.log(studentsMap);

// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });

//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return (acc += player.playtime / player.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);
