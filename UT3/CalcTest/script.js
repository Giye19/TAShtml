const db = fetch("http://localhost:3000/");






const pregunta = document.getElementById("pregunta");
const respuesta1 = document.getElementById("bt1");
const respuesta2 = document.getElementById("bt2");
const respuesta3 = document.getElementById("bt3");




function generarFuncion()
{
   let valor1 = Math.floor(Math.random * 10000);
   let valor2 = Math.floor(Math.random * 10000);
   let operacion = Math.random;
   if(operacion >0.5)
   {
    signo = "+"
    funcionreal = valor1 + valor2;
   }
   else
   {
    signo = "-"
    funcionreal = valor1 - valor2;
   }
   funcionString = `valor1 ${signo} valor2`
   pregunta.textContent = funcionString;
   return funcionString;
}

function generarRespuestas()
{
    valorrandom = Math.random;
    if (valorrandom <0.33)     //dcide cual de los 3 botones tiene la respuesta correcta
    {
        bt1.textContent = funcionreal;
        bt2.textContent = Math.floor(Math.random * 20000)
        bt3.textContent = Math.floor(Math.random * 20000)
    }
    else if(0.33 < valorrandom < 0.63)
    {
        respuesta1.textContent = Math.floor(Math.random * 20000)
        respuesta2.textContent = funcionreal;
        respuesta3.textContent = Math.floor(Math.random * 20000)
    }
    else{
        respuesta1.textContent = Math.floor(Math.random * 20000)
        respuesta2.textContent = Math.floor(Math.random * 20000)
        respuesta3.textContent = funcionreal;
    }
}


function Actualizar()
{
    generarFuncion();
    generarRespuestas();
}

Actualizar();
