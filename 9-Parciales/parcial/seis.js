function Mostrar()
{
	var dia=0;
	var importeDelDia;
	
	var importeMayor;
	var importeMenor;

	while (dia < 24)
	{
		dia++;

		importeDelDia=prompt("Ingrese el importe de las ventas del dia "+dia);
		importeDelDia=parseInt(importeDelDia);

		while (isNaN(importeDelDia) || importeDelDia < 1)
		{
			alert("Error.Ingrese el importe nuevamente.");
			importeDelDia=prompt("Ingrese el importe de las ventas:");
			importeDelDia=parseInt(importeDelDia);
		}

		if (dia == 1)
		{
			importeMayor=importeDelDia;
			importeMenor=importeDelDia;
		}
		else
		{
			if (importeDelDia > importeMayor)
			{
				importeMayor=importeDelDia;
			}
			else
			{
				if (importeDelDia < importeMenor)
				{
					importeMenor=importeDelDia;
				}
			}
		}
	}

	document.write("El mayor importe fue de: $"+importeMayor);
	document.write("<br>El menor importe fue de: $"+importeMenor);
}
