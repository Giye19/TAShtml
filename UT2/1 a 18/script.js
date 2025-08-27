

/*EJERCICIOS DEL 1 AL 18 EN ESTE ARCHIVO*/
/*EJERCICIOS DEL 1 AL 18 EN ESTE ARCHIVO*/
/*EJERCICIOS DEL 1 AL 18 EN ESTE ARCHIVO*/


function repeatString(texto, repeticiones)
{
    for (let i =0; i<repeticiones; i++)
    {
        console.log(texto);
    }
}

function reverseString(texto)
{
    let textoRevertido = "";
    for (let i = texto.length -1; i >= 0; i--)
    {
        textoRevertido += texto[i];
    }
    return textoRevertido;
}

function removeFromArray(arreglo, item)
    {
        arreglo.remove(item);
        console.log(arreglo);
    }

function sumAll(a,b)
{
    let suma=0;
    for (let i=a; i<=b;i++)
    {
        suma+=i;
    }
    console.log(suma);
}

function leapYears(anio)
{
    let esBisiesto = false;
    if ((anio % 4 === 0) || (anio % 100 === 0) && (anio % 400 === 0))
    {
        esBisiesto = true;
    }
    console.log(esBisiesto);
}

function convertToCelsius(temp)
{
    let celsius = (temp - 32) * 5/9;
    console.log(float(celsius.toFixed(1)));
    return celsius;
}

function convertToFahrenheit(temp)
{
    let fahrenheit = (temp * 9/5) + 32;
    console.log(float(fahrenheit.toFixed(1)));
    return fahrenheit;
}

function getTheTitles(books)
{let titles = [];
    for (let i=0; i<books.length; i++){
        titles.push(books[i].title);}
    console.log(titles);
    return titles;
}


function findTheOldest(people)
{
    let oldest = people[0];
    for (let i=1; i<people.length; i++)
    {
        if ((people[i].yearOfDeath - people[i].yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth))
        {
            oldest = people[i];
        }
    }
    console.log(oldest);
    return oldest;
}

function getOdds(nums)
{
    let odds = nums.filter(num => num % 2 !== 0);
    console.log(odds);
    return odds;
}

function getSum(nums)
{
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    return sum;
}

function duplicates(nums)
{
    let seen = new Set();
    let duplicates = new Set();
    for (let num of nums)
    {
        if (seen.has(num))
        {
            if (!duplicates.has(num))
            {
                duplicates.add(num);
            }
        }
        else
        {
            seen.add(num);
        }
    }
    console.log(duplicates.length);
    return duplicates.length;
}

function generatePassword(length)
{
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789";
    let simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
    let contrasenia = "";
    if (length < 8)
    {
        console.log("La contraseña debe tener al menos 8 caracteres");
        return;
    }
    else{
            for (let i=0; i<length; i++)
    {
        let tipo = Math.floor(Math.random() * 4);
        if (tipo === 0)
        {
            contrasenia += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
        }
        else if (tipo === 1)
        {
            contrasenia += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
        }
        else if (tipo === 2)
        {
            contrasenia += numeros.charAt(Math.floor(Math.random() * numeros.length));
        }
        else
        {
            contrasenia += simbolos.charAt(Math.floor(Math.random() * simbolos.length));
        }
    }
    console.log(contrasenia);
    return contrasenia;
    }
}

    const boton = document.getElementById("botonAgregar");
    const lista = document.getElementById("lista");
    const input = document.getElementById("input");

    boton.addEventListener("click", function() {
        const texto = input.value.trim(); 
        const nuevoElemento = document.createElement("li"); 
        nuevoElemento.textContent = texto;
        lista.appendChild(nuevoElemento);  
        input.value = "";
    }
    );


    const botonEliminar = document.getElementById("eliminarultimo");
    botonEliminar.addEventListener("click", function() {
        const elementos = lista.getElementsByTagName("li");
        if (elementos.length > 0) {
            lista.removeChild(elementos[elementos.length - 1]);
        }
    });

    const textoOculto = document.getElementById("textooculto");
    const botonMostrarOcultar = document.getElementById("botonmostrarocultar");
    botonMostrarOcultar.addEventListener("click", function() {
        if (textoOculto.style.display === "none") {
            textoOculto.style.display = "block";
            botonMostrarOcultar.textContent = "Ocultar Texto";
        } else {
            textoOculto.style.display = "none";
            botonMostrarOcultar.textContent = "Mostrar Texto";
        }
    });


    const contador = document.getElementById("contador");
    const incrementador = document.getElementById("incrementador");
    incrementador.addEventListener("click", function() {
        let contadoractual = parseInt(contador.textContent);
        contadoractual++;
        contador.textContent = contadoractual;
    });





    const personas = ["Guillermo", "Nicolas", "Natanael", "Bruno", "Joaquin", "Victoria", "Juan", "Sofía"];
    const lista2 = document.getElementById("lista2");
    const buscador = document.getElementById("buscador");

    function renderizarLista(items) {
        lista2.innerHTML = ""; 
        items.forEach(persona => {
            const li = document.createElement("li");
            li.textContent = persona;
            lista2.appendChild(li);
        });
    }
    renderizarLista(personas);

    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        const elementoslista2 = lista2.getElementsByTagName("li");
        for (let li of elementoslista2) {
            if (li.textContent.toLowerCase().includes(texto)) {
                li.style.display = "list-item";
            } else {
                li.style.display = "none";
            }
        }
    });

/*EJERCICIOS DEL 1 AL 18 EN ESTE ARCHIVO*/
/*EJERCICIOS DEL 1 AL 18 EN ESTE ARCHIVO*/
/*EJERCICIOS DEL 1 AL 18 EN ESTE ARCHIVO*/