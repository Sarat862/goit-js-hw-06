const categoriesItemEl = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesItemEl.length);

const forEachItemsEL = categoriesItemEl.forEach(item => {
    console.log("Category:", item.querySelector("h2").textContent);
    console.log("Elements:", item.querySelectorAll("li").length);
})
