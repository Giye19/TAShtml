
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

function leapYears(año)
{
    let esBisiesto = false;
    if ((año % 4 === 0) || (año % 100 === 0) && (año % 400 === 0))
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