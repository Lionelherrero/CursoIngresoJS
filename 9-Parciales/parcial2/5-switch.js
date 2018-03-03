//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes del año:");
	mes=mes.lowerCase();

	switch (mes)
	{
		case "enero":
		case "febrero":
						alert("Veranito!!!");
						break;
		default:
						alert("extraño enero y febrero!!!");

	}
	
}

