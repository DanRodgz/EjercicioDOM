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

let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");

let contador = 0;
function modifica() {
  //encabezado1.innerText = "Ejercicio DOM";
  encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
  encabezado2.innerText = ++contador;
} // modifica

btnMostrar.addEventListener("click", function (event) {
  event.preventDefault(); // No hagas lo que haces por defecto.

  let element = document.createElement("li");
  element.innerText = "Another item"; // <li>Anothe item</li>
  element.classList.add("list-group-item");

  let element2 = element.cloneNode(true);

  // SOLO PUEDE EXISTIR EN UN LUGAR A LA VEZ, SIEMPRE TOMA COMO REFERENCIA LA ÚLTIMA LÍNEA LEÍDA

  // before: Inserta el elemento antes de la lista
  // listas.item(0).before(element);

  // prepend: Inserta el elemento al principio de la lista
  // listas.item(0).prepend(element2);

  // append: Inserta el elemento al final de la lista
  // listas.item(0).append(element);

  // after: Inserta el elemento después de la lista
  // listas.item(0).after(element2);

  // listas.item(1).insertAdjacentElement("afterbegin", element);
  // listas.item(1).insertAdjacentElement("beforeend", element2);

  listas
    .item(1)
    .insertAdjacentHTML(
      "beforebegin",
      `<li class="list-group-item">Before begin item</li>`
    );

  listas
    .item(1)
    .insertAdjacentHTML(
      "afterend",
      `<li class="list-group-item">After end item</li>`
    );

  listas
    .item(1)
    .insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">After begin item</li>`
    );

  listas
    .item(1)
    .insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item">Before end item</li>`
    );
}); //btnMostrar

// Se ejecuta cuando termina de cargar todos los elementos de la página
window.addEventListener("load", function (event) {
  console.log("Se terminó de cargar la página");
}); // Load

function txtToUpper(event) {
  event.target.value = event.target.value.trim().toUpperCase();
}

//blur -> cuando se sale del campo
// txtRFC.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtRFC.value = txtRFC.value.toUpperCase();
// });//txtRFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//txtRFC

// Blur -> cuando sale del campo
txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);

txtTelefono.addEventListener("blur", function (event) {
  event.preventDefault();
  txtTelefono.value = txtTelefono.trim().value.slice(0, 10);
});
