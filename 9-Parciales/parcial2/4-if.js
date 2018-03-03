//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;

	var resultado;

	numeroUno=prompt("Ingrese un número:");
	numeroUno=parseInt(numeroUno);
	
	numeroDos=prompt("Ingrese otro número:");
	numeroDos=parseInt(numeroDos);

	if (numeroUno == numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else
	{
		if (numeroUno > numeroDos)
		{
			resultado= numeroUno - numeroDos;
		}
		else
		{
			
			resultado= numeroUno + numeroDos;	
			
			
		}
	}
	
	alert("El resultado es: "+resultado);
}

