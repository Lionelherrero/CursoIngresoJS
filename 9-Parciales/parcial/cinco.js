function Mostrar()
{
	var dia;

	dia=prompt("Ingrese un día:");

	switch (dia)
	{
		case "Sábado":
		case "Domingo":
					alert("Es fin de semana.");
					break;
		default:
					alert("¡¡¡A trabajar!!!");
					break;
	}



}
