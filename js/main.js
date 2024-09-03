const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById(
  "alertValidacionesTexto"
);
const tabla = document.getElementById("tablaListaCompras");
const cuerpoTabla = tabla.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

//Esto es una bandera(isValid), al ser true permite agregar los datos a la tabla.
let isValid = true;
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos = 0;

function validarCantidad() {
  if (txtNumber.value.length == 0) {
    return false;
  }

  if (isNaN(txtNumber.value)) {
    return false;
  }

  if (Number(txtNumber.value) <= 0) {
    return false;
  }

  return true;
} //validarCantidad()

function getPrecio(){
    return Math.round((Math.random() * 10000))/100;
}//getPrecio

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.style.border = "";
  txtNumber.style.border = "";
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  isValid = true;

  //Validar el nombre del producto
  if (txtNombre.value.length < 3) {
    txtNombre.style.border = "solid medium red";
    alertValidacionesTexto.innerHTML =
      "El <strong>Nombre</strong> no es correcto.<br/>";
    alertValidaciones.style.display = "block";
    isValid = false;
    //return false
  }
  
  //Validar la cantidad del producto
  if (!validarCantidad()) {
    txtNumber.style.border = "solid medium red";
    alertValidacionesTexto.innerHTML +=
      "La <strong>cantidad</strong> no es correcta.<br/>";
    alertValidaciones.style.display = "block";
    isValid = false;
  }

  if(isValid){
    contador++;
    precio = getPrecio();
    let row = `<tr>
      <td>${contador}</td>
      <td>${txtNombre.value}</td>
      <td>${txtNumber.value}</td>
      <td>${precio}</td>
    </tr>`;
    cuerpoTabla.insertAdjacentHTML("beforeend", row);
    costoTotal += precio * Number(txtNumber.value);
    totalEnProductos += Number(txtNumber.value);
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = `$${costoTotal.toFixed(2)}`;
    //LocalStorage
    localStorage.setItem("contador", contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));
    
    txtNombre.value = "";
    txtNumber.value = "";
    txtNombre.focus();
  }//isValid

}); //addEventListener agregar

//Blur: es cuando un campo pierde el foco, se sale del campo
//trim: elimina los espacios
txtNombre.addEventListener("blur", function (event) {
  txtNombre.value = txtNombre.value.trim();
}); //aqui termina el addEventListerner

txtNumber.addEventListener("blur", function (event) {
  txtNumber.value = txtNumber.value.trim();
}); //aqui termina el addEventListerner

window.addEventListener("load", function(){
  if(localStorage.getItem("contador", contador) != null){
    contador = Number(this.localStorage.getItem("contador"));
  }//!=null
  if(localStorage.getItem("totalEnProductos", totalEnProductos)!= null){
    totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"));
  }//!=null
  if(localStorage.getItem("costoTotal", costoTotal.toFixed(2)) != null){
    costoTotal = Number(this.localStorage.getItem("costoTotal"));
  }//!=null
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = `$${costoTotal.toFixed(2)}`;    
});//window load