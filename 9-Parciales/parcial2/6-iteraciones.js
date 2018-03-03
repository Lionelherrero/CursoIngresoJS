//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeDeVentas;

	var dia=1;

	var importeMayor;
	var importeMenor;

	while (dia<=7)
	{
		importeDeVentas=prompt("Ingrese el importe de las ventas:");
		importeDeVentas=parseInt(importeDeVentas);

		while (importeDeVentas <= 0 || isNaN(importeDeVentas))
		{
			alert("Error. Ingrese un importe válido.");
			importeDeVentas=prompt("Ingrese el importe de las ventas:");
			importeDeVentas=parseInt(importeDeVentas);
		}

		if (dia==1)
		{
			importeMayor=importeDeVentas;
			importeMenor=importeDeVentas;
		}
		else
		{
			if (importeDeVentas > importeMayor)
			{
				importeMayor=importeDeVentas;
			}
			else
			{
				if (importeDeVentas < importeMenor)
				{
					importeMenor=importeDeVentas;
				}
			}
		}


		dia++;


	}

	/* switch (dia)
	{
		case 1:
				dia="Lunes"
	}
	
	*/
	
	alert("El importe mayor es de $: "+importeMayor);
	alert("El importe menor es de $: "+importeMenor);


	
}

