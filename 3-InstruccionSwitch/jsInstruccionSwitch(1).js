function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch (mesDelAño)
	{
		case "Enero": //Tiene que ser igual al "option value" del html!!
					alert("que comiences bien el año!!!");
					break;

		case "Marzo":
					alert("a clases!!!");
					break;

		case "Julio":
					alert("se vienen las vacaciones!!!");
					break;

		case "Diciembre":
						alert("Felices fiestas!!!");
						break;

		// No se pone default porque hay otras opciones
	}






}//FIN DE LA FUNCIÓN