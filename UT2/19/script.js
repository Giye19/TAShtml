

const nombre = document.getElementById("nombre");
const contrasenia = document.getElementById("contrasenia");
const email = document.getElementById("email");
const errornombre = document.getElementById("errornombre");
const errorcontrasenia = document.getElementById("errorcontrasenia");
const erroremail = document.getElementById("erroremail");
const botonenviar = document.getElementById("botonenviar");



nombre.addEventListener("input", function () {
    if(nombre.value === ""){
        errornombre.style.opacity = "1";
        errornombre.style.color = "red";
       
    }
    else{
        errornombre.style.opacity = "0";
    }
});


contrasenia.addEventListener("input", function () {
    if(contrasenia.value.length < 8)
    {
        errorcontrasenia.style.opacity = "1";
        errorcontrasenia.style.color = "red";
        
    }
    else
    {
        errorcontrasenia.style.opacity = "0";
    }
});


email.addEventListener("input", function () {
    if(!(email.value.includes("@") && email.value.includes(".")))
    {
        erroremail.style.opacity = "1";
        erroremail.style.color = "red";
      
    }
    else
    {
        erroremail.style.opacity = "0";
    }
});





botonenviar.addEventListener("click", function() {
    if(nombre.value !== "" && contrasenia.value.length >= 8 && (email.value.includes("@") && email.value.includes("."))){
        alert("Formulario enviado correctamente");
        nombre.value = "";
        contrasenia.value = "";
        email.value = "";
    }
    else{
        alert("Hay errores en el formulario");
    }
});
