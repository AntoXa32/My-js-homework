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
// const formEl = document.querySelector(".feedback-form");
// const textarea = formEl.elements.message;
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// formEl.addEventListener("input", (event) => {
//   localStorage.setItem(localStorageKey, event.target.value);
// });

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   formEl.reset();
// });

// const arr = ["MARS", "YUPITER", "EARS"];

// localStorage.setItem("ARRS", JSON.stringify(arr));
// const arrs = localStorage.getItem("ARRS");
// console.log(JSON.parse(arrs));

// localStorage.clear();

// const btnEl = document.querySelector("#btn");
// const btnClearEl = document.querySelector(".btn");
// let timeoutId;
// let intervalId = null;
// btnEl.style.padding = "30px";
// btnEl.style.background = "red";

// btnClearEl.style.padding = "30px";
// btnClearEl.style.background = "blue";

// btnEl.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async js!");
//   }, 2000);
//   console.log(timeoutId);
// });
// btnClearEl.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });

// btnEl.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// btnClearEl.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });

// const date = new Date("2030-03-17");
// console.log(Date.now());

// const startTime = Date.now();
// for (let index = 0; index <= 100; index++) {
//   console.log(index);
// }

// const endTime = Date.now();
// const elepsedTime = endTime - startTime;

// console.log(`Elepsed Time: ${elepsedTime} ms`);

// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date);

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log("Full year: ", date.getFullYear());
// console.log("Hours: ", date.getHours());
// console.log("Minutes: ", date.getMinutes());
// console.log("Seconds: ", date.getSeconds());
// console.log("Milliseconds: ", date.getMilliseconds());

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });
// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error"); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((error) => console.error(error));

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
//   .then((values) => console.log(values))
//   .catch((error) => console.error(error));

// for (let index = 3; index > 0; index--) {
//   const delay = index * 1000;
//   setTimeout(() => console.log(index), delay);
// }

// const promise = new Promise((resolve, reject) => {
//   const isFullfild = Math.random() > 0.3;
//   console.log(isFullfild);

//   if (isFullfild) {
//     resolve("Виконано успішно");
//   } else {
//     reject("Виконано з помилкою");
//   }
// });

// console.log(promise);

// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: { Accept: application / json },
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((users) => {
//       const markup = users
//         .map((user) => {
//           return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join("");

//       userList.insertAdjacentHTML("beforeend", markup);
//     })
//     .catch((error) => console.log(error));
// });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error));

// const postId = 5;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// const postToAdd = {
//   title: "CRUD",
//   body: "CRUD is awesome!",
//   rara: "I am junior",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// const postToUpdate = {
//   id: 5,
//   body: "CRUD is really awesome!",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((post) => console.log(post))
//   .catch((error) => console.log("ERROR:", error));

// const postToUpdate = {
//   body: "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit",
//   id: 66,
//   title: "sit vel voluptatem et non libero",
//   userId: 6,
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`)
//   .then((response) => {
//     if (!response) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((get) => console.log(get))
//   .catch((error) => console.log("Error:", error));

// fetch("https://jsonplaceholder.typicode.com/posts/25");

// Завдання: Напиши функцію, яка виконує GET-запит до API та отримує список користувачів. Після отримання даних відобрази імена користувачів у вигляді списку на сторінці.
// API для тесту: https://jsonplaceholder.typicode.com/users

// Додатково: Додай обробку помилок і сповіщення про проблему у випадку невдалого запиту.

// const listEl = document.querySelector(".user-list");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((users) => {
//     users.forEach((user) => {
//       listEl.insertAdjacentHTML("beforeend", `<li><p>${user.name}</p></li>`);
//     });
//   })
//   .catch((error) => alert("Error:", error));

const API_KEY = "677c1f9820824100c07bf956";
const BASE_URL = `https://${API_KEY}.mockapi.io`;

// function fetchBooks() {
//   const options = {
//     method: "GET",
//   };

//   return fetch(`${BASE_URL}/books`, options).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

// function fetchBookById(bookId) {
//   const options = {
//     method: "GET",
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

// fetchBooks()
//   .then((data) => {
//     console.log(data);
//     console.log("Show all books");
//   })
//   .catch((error) => {
//     console.log(`Somthing went wrong ${error}`);
//   });

// fetchBookById(2)
//   .then((data) => {
//     console.log(data);
//     console.log("Show one book");
//   })
//   .catch((error) => {
//     console.log(`Somthing went wrong ${error}`);
//   });

// fetchBookById(4)
//   .then((data) => {
//     console.log(data);
//     console.log("Show one book");
//   })
//   .catch((error) => {
//     console.log(`Somthing went wrong ${error}`);
//   });

// function addbook(book) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(book),
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   return fetch(`${BASE_URL}/books`, options).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

// addbook({
//   id: "25",
//   title: "LORD of the rings",
//   author: "John Tolkien",
//   genres: ["chivalric navel", "adventure", "fantasy"],
//   rating: 30,
// }).then((data) => console.log(data));

// function updateBookById(update, bookId) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(update),
//     headers: {
//       "Content-type": "application/json",
//     },
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// }

// updateBookById({ title: "Велика нова книга по NODE.JS" }, 26).then((data) =>
//   console.log(data)
// );
// updateBookById({ title: "Супер нова книга" }, 2).then((data) =>
//   console.log(data)
// );
// updateBookById({ title: "мега крута книга", genres: ["mega"] }, 15).then(
//   (data) => console.log(data)
// );

function deleteBookId(bookId) {
  const options = {
    method: "DELETE",
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

deleteBookId(5);
// deleteBookId(12);
