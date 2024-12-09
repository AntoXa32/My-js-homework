const ollCategories = document.querySelectorAll(".item");
console.log("Number of categories:", ollCategories.length);

ollCategories.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
