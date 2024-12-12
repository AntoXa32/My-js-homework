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

// class User {
//   static amountOfRegistredUser = 0;
//   name;
//   password;
//   lastName;

//   constructor(name, password, lastName = "") {
//     this.name = name;
//     this.password = password;
//     this.lastName = lastName;
//     User.calcAmountUser();
//   }

//   getName() {
//     return this.name;
//   }

//   setName(newName) {
//     return (this.name = newName);
//   }

//   static calcAmountUser() {
//     User.amountOfRegistredUser += 1;
//   }
// }

// const mango = new User("Mango", "123456");
// console.log(mango.setName("Anton"));
// console.log(mango);

// const yarosh = new User("Yarosh", "qwerty", "Mango");
// console.log(yarosh);

// console.log(User.amountOfRegistredUser);

// class Vechile {
//   constructor(make, model) {
//     this.make = make;
//     this._model = model;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// class Car extends Vechile {
//   #maxFuellTruckOpaciti = 55;
//   constructor(make, model, fuellTruckOpaciti) {
//     super(make, model);
//     if (fuellTruckOpaciti <= this.#maxFuellTruckOpaciti) {
//       this.fuellTruckOpaciti = fuellTruckOpaciti;
//     }
//   }
// }

// class Track extends Vechile {
//   #maxFuellTruckOpaciti = 150;
//   constructor(make, model, fuellTruckOpaciti) {
//     super(make, model);
//     if (fuellTruckOpaciti <= this.#maxFuellTruckOpaciti) {
//       this.fuellTruckOpaciti = fuellTruckOpaciti;
//     }
//   }
// }

// const car1 = new Car("Opel", "Astra", 50);
// console.log(car1);

// const track1 = new Track("Ford", "F150", 80);
// console.log(track1);

// const model = car1.model;
// console.log(model);

// class Bloger {
//   email = "";
//   age = 0;
//   numberOfPosts = 0;
//   topics = [];

//   constructor(params) {
//     this.email = params.email;
//     this.age = params.age;
//     this.numberOfPosts = params.numberOfPosts;
//     this.topics = params.topics;
//   }

//   getInfo() {
//     return `Bloger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Bloger({
//   email: "mango@MediaList.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// class User {
//   #login;
//   #email;

//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }

// const mango = new User({
//   email: "mango@dog.woof",
//   login: "Mango",
// });

// const poly = new User({ login: "Poly", email: "poly@mail.com" });

// console.log(mango.login);
// mango.login = "Anton";
// console.log(mango.login);

// console.log(poly.email);
// poly.email = "anton@gmail.com";
// console.log(poly.email);

// class Storage {
//   constructor(storageCart) {
//     this.items = storageCart;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items = this.items.filter((cartItem) => cartItem !== item);
//   }
// }

// const storage = new Storage(["@", "#", "$", "%"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("*");
// console.table(storage.items);

// storage.removeItem("$");
// console.table(storage.items);
