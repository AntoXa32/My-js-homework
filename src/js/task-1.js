const categories = document.querySelector("#categories");

const categoriesItems = categories.querySelectorAll("li.item");

const categoriesLength = categoriesItems.length;

console.log("Number of categories:", categoriesLength);

categoriesItems.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const list = element.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", list);
});
