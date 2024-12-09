"use strict";

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.call(mango, "Welcome");
// greet.call(poly, "Welcome");

// console.log(this);

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(User.prototype); // “mango@mail.com”

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("showThis -> this", this);
// };

// const objA = {
//   a: 27,
//   b: 588,
// };

// showThis.call(objA, 5, 6, [100, 200, 300]);
// showThis.apply(objA, [5, 6, [100, 300, 500]]);
