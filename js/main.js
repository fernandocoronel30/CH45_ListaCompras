const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length == 0){
        return false;
    }

    if(isNaN(txtNumber.value)){
        return false;
    }

    if(Number(txtNumber.value) <= 0){
        return false;
    }

    return true;
}//validarCantidad()

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none"

    if(txtNombre.value.length < 3){
        txtNombre.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML = "El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display = "block";
        //return false
    }

    //Validar cantidad
    if(! validarCantidad()){
        txtNumber.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "La <strong>cantidad</strong> no es correcta.<br/>";
        alertValidaciones.style.display = "block";
    }


});//addEventListener agregar

//Blur: es cuando un campo pierde el foco, se sale del campo
//trim: elimina los espacios 
txtNombre.addEventListener("blur", function(event){
    txtNombre.value = txtNombre.value.trim();
});//aqui termina el addEventListerner 

txtNumber.addEventListener("blur", function(event){
    txtNumber.value = txtNumber.value.trim();
});//aqui termina el addEventListerner 


































