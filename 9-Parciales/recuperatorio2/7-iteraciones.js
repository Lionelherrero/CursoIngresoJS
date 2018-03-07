//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;

	var contadorAlumno=0;
	var acumuladorNotas=0;

	var promedioNotas;

	var notaMasBaja;

	var acumuladorVaronesMasSeis=0;


	while (contadorAlumno < 6)
	{
		contadorAlumno++;

		nota=prompt("Ingrese la nota:");
		nota=parseInt(nota);

		while (nota < 0 || nota > 10)
		{
			alert("Error. Ingrese un número entre 0 y 10.");
			nota=prompt("Ingrese la nota");
			nota=parseInt(nota);
		}

		acumuladorNotas=acumuladorNotas+nota;

		sexo=prompt("Ingrese el sexo:");

		while (sexo != "f" && sexo != "m")
		{
			alert("Error. Ingrese 'f' para femenino o 'm' para masculino.");
			sexo=prompt("Ingrese el sexo:");
		}

		if (contadorAlumno==1)
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

		if (nota >= 6 && sexo == "m")
		{
			acumuladorVaronesMasSeis++;
		}
	}

	promedioNotas=acumuladorNotas/contadorAlumno;

	alert("El promedio de las notas es: "+promedioNotas);
	alert("La nota más baja es: "+notaMasBaja);
	alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+acumuladorVaronesMasSeis);

	
	
}

