const contenedor = document.querySelector(".flex-container"); //Seleccion del contenedor de todo
// document.querySelector(".send-button").value = "COMPRAR" - Metodo mas optimo
const boton = document.querySelector(".send-button"); //Para poner el botón en mayuscula
let valorAntiguo = boton.value;//Para poner el botón en mayuscula desde js
boton.value = valorAntiguo.toUpperCase(); //Para poner el botón en mayuscula desde js
//Se pude hacer más facil simplemente poniendo en value del HTML "COMPRAR

function crearLlave(nombre, modelo, precio) {
  img = "<img class='llave-img' src='llave.png'>";
  nombre = `<h2>${nombre}</h2>`;
  modelo = `<h3>${modelo}</h3>`;
  precio = `<p>precio: <b>$${precio}<b></p>`;
  return [img, nombre, modelo, precio]; //array que nos retorna esos datos
//EJ: const llave = crearLlave("llave1", "modelo X", "33");
//document.write(llave[0], llave[1], llave[2]);
//Asi nos imprime el array con los datos que le di
}
const changeHidden = (number) => { //Cuando damos click, se guarda el modelo en value
  document.querySelector(".key-data").value = number;
};
let documentFragment = document.createDocumentFragment();//Crear fragmento para optomizar los elemntos html
//Elemento como: documentFragment.appendChild(div); - contenedor.appendChild(documentFragment);
for (let i = 1; i <= 20; i++) { //Creación de 20 llaves
  let modeloRandom = Math.round(Math.random() * 10000);//Número de modelo random y redondeado (round)
  let precioRandom = Math.round(Math.random() * 10 + 30); //Número random entre 30 y 40 (precio y redondeando)
  let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom); // Número de llave segun el for, modelo y precio random
  let div = document.createElement("DIV");//Crear div en el bucle
  div.addEventListener("click", () => {//Cuando daomos click, se guarda el modelo en value
    changeHidden(modeloRandom);
  });
  div.tabIndex = i; //Quede seleccionada la llave escogida
  div.classList.add(`item-${i}`, "flex-item"); //Insertar HTML, añadimos esas 2 clases y para detectar que tipo de elemnto es
  div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];//Para usarlo como array e imprimir sus datos en orden
  documentFragment.appendChild(div);//Para trabajar con el elemeto HTML y NO el div
}
contenedor.appendChild(documentFragment);