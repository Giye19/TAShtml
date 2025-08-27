const texto = document.getElementById("texto")

window.addEventListener("resize", function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    texto.textContent = `width: ${width} height: ${height}`
});