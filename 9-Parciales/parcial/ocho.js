function Mostrar()
{
	var numeroPositivo;
	var respuesta="si";

	var contadorNumerosPares=0;

	var acumuladorNumerosPositivos=0;
	var contadorNumerosPositivos=0;
	var promedioNumerosPositivos=0;

	var numeroMaximo;
	var numeroMinimo;


	while (respuesta == "si")
	{
		numeroPositivo=prompt("Ingrese un numero positivo:");
		numeroPositivo=parseInt(numeroPositivo);

		while(isNaN(numeroPositivo) || numeroPositivo <= 0 )
		{
			alert("Error. Ingrese un número positivo.");
			numeroPositivo=prompt("Ingrese un numero positivo:");
			numeroPositivo=parseInt(numeroPositivo)
		}

		contadorNumerosPositivos++;
		acumuladorNumerosPositivos=acumuladorNumerosPositivos + numeroPositivo;

		if (numeroPositivo%2 == 0 /*&& numeroPositivo != 0*/)
		{
			contadorNumerosPares++;
		}

		if (contadorNumerosPositivos==1)
		{
			numeroMinimo=numeroPositivo;
			numeroMaximo=numeroPositivo;
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



		respuesta=prompt("Si desea continuar escriba 'si'.");
	}

	
	document.write("La cantidad de números pares es: "+contadorNumerosPares);

	promedioNumerosPositivos=acumuladorNumerosPositivos/contadorNumerosPositivos;
	document.write("<br>El promedio de los números positivos es: "+promedioNumerosPositivos)

	document.write("<br>La suma de todos los números es: "+acumuladorNumerosPositivos)

	document.write("<br>El número máximo es: "+numeroMaximo);
	document.write("<br>El número mínimo es: "+numeroMinimo);

}
