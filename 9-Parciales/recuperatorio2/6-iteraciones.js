//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeVentas;
	var dia=0;

	var mayorImporte;
	var menorImporte;

	while (dia<7)
	{
		dia++;

		importeVentas=prompt("Ingrese el importe:");
		importeVentas=parseInt(importeVentas);

		while (isNaN(importeVentas) || importeVentas < 1)
		{
			alert("Error. Ingrese el importe nuevamente.");
			importeVentas=prompt("Ingrese el importe:");
			importeVentas=parseInt(importeVentas);
		}

		if (dia == 1)
		{
			mayorImporte=importeVentas;
			menorImporte=importeVentas;
		}
		else
		{
			if (importeVentas > mayorImporte)
			{
				mayorImporte=importeVentas;
			}
			else
			{
				if (importeVentas < menorImporte)
				{
					menorImporte=importeVentas;
				}
			}
		}
	}

	document.write("El mayor importe fue: "+mayorImporte);
	document.write("<br>El menor importe fue: "+menorImporte);
	
	
}

