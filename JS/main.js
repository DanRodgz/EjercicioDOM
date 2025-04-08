let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function (event) {
  event.preventDefault(); // No hagas lo que haces por defecto.
  console.log("boton btnModificar presionado");
});

let encabezado1 = document.getElementById("encabezado1");
encabezado1.innerText = "Ejercicio DOM";
console.log(encabezado1.innerText);

let encabezado2 = document.getElementById("encabezado2");
encabezado2.innerText = "DOM Exercise";
console.log(encabezado2.innerText);

let listas = document.getElementsByTagName("ul");
console.log(listas.length);
console.log(listas.item(0));

let elementos = document.getElementsByClassName("list-group-item");
console.log(elementos.length);
console.log(elementos.item(3));

let otroElemento = document.querySelector("ul>li");
console.log("otroElemento: ", otroElemento);

let otrosElementos = document.querySelectorAll("ul>li");
console.log(otrosElementos.length);
