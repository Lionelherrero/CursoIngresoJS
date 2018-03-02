function Mostrar()
{
	var nota;
	var sexo;

	for (i=1; i <= 100; i++)
	{
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
	}

	

}
