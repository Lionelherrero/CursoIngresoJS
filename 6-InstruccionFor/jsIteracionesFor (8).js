function Mostrar()
{
	var numeroIngresado;

	numeroIngresado=prompt("Ingrese un numero para saber si es primo o no:");
	numeroIngresado=parseInt(numeroIngresado);

	for (i=2; i <= numeroIngresado; i++)
	{
		if (numeroIngresado%i == 0)
		{
			if (numeroIngresado/i == 1 && numeroIngresado/1 == numeroIngresado)
			{
				alert("Es un número primo.");
			}
			else
			{
				alert("No es un número primo.");
				break;
			}	
		}
		
	}

	if (numeroIngresado == 0 || numeroIngresado == 1)
	{
		alert("No es un número primo.");
	}



}//FIN DE LA FUNCIÓN