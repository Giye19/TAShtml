const input = document.getElementById("input");
const boton = document.getElementById("boton");
const resultados = document.getElementById("resultados");

boton.addEventListener("click", () => {
  const NombrePais = input.value.trim();
  if (!NombrePais) return;

  fetch(`https://restcountries.com/v3.1/name/${NombrePais}?fields=name,capital,region,population,flags`)
    .then(response => response.json())
    .then(data => {
      resultados.innerHTML = "";
      data.forEach(c => {
        resultados.innerHTML += `
          <div>
            <h2>${c.name.common}</h2>
            <p>Capital: ${c.capital ? c.capital[0] : "No disponible"}</p>
            <p>Población: ${c.population}</p>
            <p>Región: ${c.region}</p>
            <img src="${c.flags.png}" alt="Bandera de ${c.name.common}" width="150">
          </div>
        `;
      });
    })
    .catch(() => {
      resultados.innerHTML = "<p>Pais no encontrado</p>";
    });
});
