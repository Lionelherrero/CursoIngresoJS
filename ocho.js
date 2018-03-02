function Mostrar()
{
	var respuesta;

	var nombreDelAnimal;
	var pesoDelAnimal;
	var temperaturaDelHabitat;

	var animalMasPesado;
	var pesoMayor;

	var animalTemperaturaMenor;
	var temperaturaMenor;

	var cantidadTemperaturasPares=0;

	var pesoPromedio;

	var cantidadAnimales=0;
	var pesoTotal;

	var temperaturaMaxima;
	var temperaturaMinima;

	while (respuesta != "no")
	{
		cantidadAnimales++;

		nombreDelAnimal=prompt("Ingrese el nombre del animal: ");
		
		pesoDelAnimal=prompt("Ingrese el peso del animal: ");
		pesoDelAnimal=parseInt(pesoDelAnimal);

		while (isNaN(pesoDelAnimal) || pesoDelAnimal < 0)
		{
			alert("Error. Ingrese el peso nuevamente.");
			pesoDelAnimal=prompt("Ingrese el peso del animal: ");
			pesoDelAnimal=parseInt(pesoDelAnimal);
		}

		temperaturaDelHabitat=prompt("Ingrese la temperatura del habitat:");
		temperaturaDelHabitat=parseInt(temperaturaDelHabitat);

		while (isNaN(temperaturaDelHabitat) || temperaturaDelHabitat < -40 || temperaturaDelHabitat > 40)
		{
			alert("Error. Ingrese la temperatura nuevamente.")
			temperaturaDelHabitat=prompt("Ingrese la temperatura del habitat:");
			temperaturaDelHabitat=parseInt(temperaturaDelHabitat);

		}

		if (cantidadAnimales == 1)
		{
			animalMasPesado=nombreDelAnimal;
			pesoMayor=pesoDelAnimal;

			animalTemperaturaMenor=nombreDelAnimal;
			temperaturaMenor=temperaturaDelHabitat

			temperaturaMaxima=temperaturaDelHabitat;
			temperaturaMinima=temperaturaDelHabitat;
		}
		else
		{
			if (pesoDelAnimal > pesoMayor)
			{
				animalMasPesado=nombreDelAnimal;
				pesoMayor=pesoDelAnimal;
			}

			if (temperaturaDelHabitat < temperaturaMenor)
			{
				animalTemperaturaMenor=nombreDelAnimal;
				temperaturaMenor=temperaturaDelHabitat;
			}

			if (temperaturaDelHabitat%2 == 0 && temperaturaDelHabitat != 0)
			{
				cantidadTemperaturasPares++;
			}

			if (temperaturaDelHabitat > temperaturaMaxima)
			{
				temperaturaMaxima=temperaturaDelHabitat;
			}
			else
			{
				if (temperaturaDelHabitat < temperaturaMinima)
				{
					temperaturaMinima=temperaturaDelHabitat;
				}
			}
		}


		

		pesoTotal=pesoTotal + pesoDelAnimal;
		

		respuesta=prompt("Si desea salir, ingrese 'no'");
	}

	pesoPromedio=pesoTotal/cantidadAnimales;
	
	document.write("<br>El animal mas pesado es: "+animalMasPesado);
	document.write("<br>El animal con habitat de temperatura más baja es: "+animalTemperaturaMenor);
	document.write("<br>La cantidad de temperaturas pares es: "+cantidadTemperaturasPares);
	document.write("<br>El peso promedio es: "+pesoPromedio);
	document.write("<br>La temperatura máxima es: "+temperaturaMaxima);
	document.write("<br>La temperatura mínima es: "+temperaturaMinima);



}
