function Mostrar()
{
	var dia;

	dia=prompt("Ingrese un día de la semana:");

	while (!isNaN(dia))
	{
		alert("Error. Ingrese un día de la semana.");
		dia=prompt("Ingrese un día de la semana:");

	}

	switch (dia)
	{
		case "Sábado":
		case "Domingo":
						alert("Es fin de semana.");
						break;
		case "Lunes":
		case "Martes":
		case "Miércoles":
		case "Jueves":
		case "Viernes":
				alert("¡¡¡A trabajar!!!");

		default:
				alert("Error. Ingrese un día de la semana.");

	}
}
