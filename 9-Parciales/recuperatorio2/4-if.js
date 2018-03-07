//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Escriba un número:");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Escriba otro número:");
	numeroDos=parseInt(numeroDos);

	while (isNaN(numeroUno) || isNaN(numeroDos))
	{
		alert("Error. Vuelva a escribir los números.");

		numeroUno=prompt("Escriba un número:");
		numeroUno=parseInt(numeroUno);

		numeroDos=prompt("Escriba otro número:");
		numeroDos=parseInt(numeroDos);
	}

	if (numeroUno == numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else
	{
		if (numeroUno>numeroDos)
		{
			resultado=numeroUno	- numeroDos;
		}
		else
		{
			resultado= numeroUno + numeroDos;
		}
	}

	document.write("El resultado es: "+resultado);


	
}

