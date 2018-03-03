//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroPositivo;
	var respuesta="sí";

	var contadorNumerosPares;

	var acumuladorNumeros=0;
	var contadorNumerosIngresados=0;
	var promedioNumerosIngresados=0;

	var numeroMaximo;
	var numeroMinimo;

	while (respuesta == "salir")
	{
		numeroPositivo=prompt("Ingrese un número positivo:");
		numeroPositivo=parseInt(numeroPositivo);

		while (numeroPositivo < 1)
		{
			alert("Error. Ingrese un número positivo.");
			numeroPositivo=prompt("Ingrese un número positivo:");
			numeroPositivo=parseInt(numeroPositivo);
		}

		contadorNumerosIngresados++;
		acumuladorNumeros=acumuladorNumeros+numeroPositivo;

		if (numeroPositivo%2 == 0)
		{
			contadorNumerosPares++;
		}

		respuesta=prompt("Si desea salir escriba 'salir':");

		if (contadorNumerosIngresados == 1)
		{
			numeroMaximo=numeroPositivo;
			numeroMinimo=numeroPositivo;
		}
		else
		{
			if (numeroPositivo>numeroMaximo)
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

	}

	
	promedioNumerosIngresados=acumuladorNumeros/contadorNumerosIngresados;

	document.write("La cantidad de numeros pares es: "+contadorNumerosPares);
	document.write("<br>El promedio de los numeros ingresados es: "+promedioNumerosIngresados);
	document.write("<br>La suma de todos los numeros es: "+acumuladorNumeros);

	
}

