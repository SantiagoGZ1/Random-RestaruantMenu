let nameFood = ["hamburguesa: ", "Taco: ", "pizza: "];
let ingredientsFood = [
  "carne",
  "pollo",
  "lechuga",
  "tomate",
  "queso",
  "salsa",
  "cebolla",
  "papas",
  "arroz",
  "frijoles",
  "chile",
  "pan",
  "tortilla",];

function elementos(nameFood) {
  return [...nameFood].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 1);
}
document.write(elementos(nameFood));

function elementos2(ingredientsFood) {
  return [...ingredientsFood]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 5);
}
document.write(elementos2(ingredientsFood));