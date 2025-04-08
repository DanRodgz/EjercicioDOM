let btnMostrar = document.getElementById("btnMostrar");

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

btnMostrar.addEventListener("click", function (event) {
  event.preventDefault(); // No hagas lo que haces por defecto.

  let element = document.createElement("li");
  element.innerText = "Another item"; // <li>Anothe item</li>
  element.classList.add("list-group-item");

  let element2 = element.cloneNode(true);

  // SOLO PUEDE EXISTIR EN UN LUGAR A LA VEZ, SIEMPRE TOMA COMO REFERENCIA LA ÚLTIMA LÍNEA LEÍDA

  // before: Inserta el elemento antes de la lista
  listas.item(0).before(element);

  // prepend: Inserta el elemento al principio de la lista
  listas.item(0).prepend(element2);

  // append: Inserta el elemento al final de la lista
  listas.item(0).append(element);

  // after: Inserta el elemento después de la lista
  listas.item(0).after(element2);
});