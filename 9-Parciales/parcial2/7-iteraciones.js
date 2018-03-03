//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;

	var promedio;

	var contadorNotas=0;
	var acumuladorNotas=0;

	var notaMasBaja;

	var contadorVaronesSeis=0;

	for (i=1; i<=6; i++)
	{
		nota=prompt("Ingrese la nota: ");
		nota=parseInt(nota);

		while (isNaN(nota) || nota < 0 || nota > 10)
		{
			alert("Error. Ingrese una nota válida");
			nota=prompt("Ingrese la nota: ");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese 'm' para masculino o 'f' para femenino:");

		while (sexo != "f" && sexo != "m")
		{
			alert("Error. Ingrese 'f' o 'm' para el sexo.");
			sexo=prompt("Ingrese el sexo: ");
		}

		if (i==1)
		{
			notaMasBaja=nota;
		}
		else
		{
			if (nota < notaMasBaja)
			{
				notaMasBaja=nota;
			}
		}

		if (sexo == "m" && nota >= 6)
		{
			contadorVaronesSeis++;
		}

		acumuladorNotas=acumuladorNotas+nota;
		contadorNotas++;



	}
	
	promedio=acumuladorNotas/contadorNotas; //o en lugar de contador i

	alert("El promedio de las notas es: "+promedio);

	alert("La nota más baja es: "+notaMasBaja);

	alert("La cantidad de varones con nota mayor o igual a seis es: "+contadorVaronesSeis);


}

