//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroPositivo;
	var respuesta;

	var contadorNumerosPares=0;

	var contadorNumeros=0;
	var acumuladorNumeros=0;
	var promedio;

	var numeroMaximo;
	var numeroMinimo;

	while (respuesta != "salir")
	{
		numeroPositivo=prompt("Escriba un número positivo:");
		numeroPositivo=parseInt(numeroPositivo);

		while (isNaN(numeroPositivo) || numeroPositivo < 1)
		{
			alert("Error. Debe ingresar un número positivo.");
			numeroPositivo=prompt("Escriba un número positivo:");
			numeroPositivo=parseInt(numeroPositivo);
		}

		contadorNumeros++;
		acumuladorNumeros=acumuladorNumeros+numeroPositivo;

		if (numeroPositivo%2 == 0)
		{
			contadorNumerosPares++;
		}

		if (contadorNumeros==1)
		{
			numeroMaximo=numeroPositivo;
			numeroMinimo=numeroPositivo;
		}
		else
		{
			if (numeroPositivo > numeroMaximo)
			{
				numeroMaximo=numeroPositivo;
			}
			else
			{
				if (numeroPositivo < numeroMinimo)
				{
					numeroMinimo=numeroPositivo;
				}
			}	
		}


		respuesta=prompt("Si desea salir escriba 'salir'.");
	}

	promedio=acumuladorNumeros/contadorNumeros;

	document.write("La cantidad de números pares es: "+contadorNumerosPares);
	document.write("<br>El promedio de todos los numeros ingresados es: "+promedio);
	document.write("<br>La suma de todos los números es: "+acumuladorNumeros);
	document.write("<br>El número máximo es: "+numeroMaximo);
	document.write("<br>El número mínimo es: "+numeroMinimo);
	
}

