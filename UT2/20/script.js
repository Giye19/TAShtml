
const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("mouseenter", function() {
    contenedor.style.backgroundImage = "url(../files/abiertos.jpg)";
});


contenedor.addEventListener("mouseleave", function() {
    contenedor.style.backgroundImage = "url(../files/cerrados.jpg)";
});

