const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const idIngredientsEl = document.querySelector("#ingredients");

const ingredientEl = ingredients.map(ingredient => {
  const createListEl = document.createElement("li");
  createListEl.textContent = ingredient;
  createListEl.classList = "item";
  return createListEl
});

idIngredientsEl.append(...ingredientEl);
