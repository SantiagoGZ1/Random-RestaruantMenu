const container = document.querySelector(".contenedor_JS");

let nameFood = ["hamburguesa ", "Taco ", "pizza "];
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
  "tortilla"];

function elementos(nameFood) {
  return [...nameFood]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 1);
}
function elementos2(ingredientsFood) {
  return [...ingredientsFood]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 5);
}

function crearElemento(name, ingredient, price, code){
  img= "<img class= 'comidaImg' src='hambur.jpg'>";
  name = `<h2>${name}</h2>`;
  ingredient = `<p>${ingredient}</p>`;
  code = `<p>${code}</p>`;
  price = `<p><b>${price}</b></p>`;
  return [img, name, ingredient, code, price];
}




const changeHidden = (number) => {
  document.querySelector(".key-data").value = number;
};
let documentFragment = document.createDocumentFragment(); //Optimiza el rendimiento

for (i = 0; i<= 15; i++){
  let codeComida = (Math.random()*1000).toFixed(0);
  let priceRandom = (Math.random()*50 + 10).toFixed(0);
  let food = crearElemento(`Nombre: ${elementos(nameFood)} `, `Ingredientes: ${elementos2(ingredientsFood)}`, `Precio$ ${priceRandom}`, `Codigo: ${codeComida}`)
  let div = document.createElement("DIV");
  div.addEventListener("click", () => {
    changeHidden(codeComida);
  });
  div.tabIndex=i;
  div.classList.add(`item-${i}`, "flex-item");
  div.innerHTML = food[0] + food[1] + food[2] + food[3] + food[4];
  documentFragment.appendChild(div);
}
container.appendChild(documentFragment);