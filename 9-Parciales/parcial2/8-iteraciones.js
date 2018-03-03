//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroPositivo;
	var respuesta;

	var contadorNumerosPares=0;

	var contadorNumerosIngresados=0;
	var acumuladorNumerosIngresados=0;
	var promedioNumerosIngresados;

	var numeroMaximo;
	var numeroMinimo;

	while (respuesta != 'salir')
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
		acumuladorNumerosIngresados=acumuladorNumerosIngresados+numeroPositivo;

		if (numeroPositivo%2 == 0)
		{
			contadorNumerosPares++;
		}

		if (contadorNumerosIngresados == 1)
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

		respuesta=prompt("Si terminó de ingresar los números escriba 'salir'.");
	}

	promedioNumerosIngresados=acumuladorNumerosIngresados/contadorNumerosIngresados;


	document.write("Cantidad de números pares ingresados: "+contadorNumerosPares);
	document.write("<br>Promedio de todos los números ingresados: "+promedioNumerosIngresados);
	document.write("<br>Suma de todos los números: "+acumuladorNumerosIngresados);
	document.write("<br>El número máximo es: "+numeroMaximo);
	document.write("<br>El número mínimo es: "+numeroMinimo);


	
}

