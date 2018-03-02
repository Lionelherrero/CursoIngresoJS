function Mostrar()
{
	var nota;
	var sexo;

	var totalNotas=0;

	var promedioNotas;
	var cantidadAlumnos=0;

	var notaMasBaja;

	var cantidadDeVaronesNotaSeis=0;

	for (i=1; i <= 100; i++)
	{
		
		cantidadAlumnos++;

		nota=prompt("Ingrese la nota del alumno:");
		nota=parseInt(nota);

		while (isNaN(nota) || nota < 0 || nota > 10)
		{
			alert("Error. Ingrese la nota nuevamente.");
			nota=prompt("Ingrese la nota del alumno:");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese 'f' para femenino o 'm' para masculino:");

		while (sexo != "m" && sexo != "f")
		{
			alert("Error. Ingrese f o m.");
			sexo=prompt("Ingrese 'f' para femenino o 'm' para masculino:");
		}

		totalNotas=totalNotas+nota;

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

		if (sexo== "m" && nota >= 6)
		{
			cantidadDeVaronesNotaSeis++;
		}

	}

	promedioNotas=totalNotas/cantidadAlumnos;
	alert("El promedio de las notas es: "+promedioNotas);

	alert("La nota más baja es: "+notaMasBaja);

	alert("La cantidad de varones con nota seis o más es: "+cantidadDeVaronesNotaSeis);

	

}
