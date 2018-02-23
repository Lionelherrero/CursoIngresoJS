function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while ( numero < 0 || numero > 10)
	{
		alert("Error. Ingrese un número entre 0 y 10");

		numero = prompt("ingrese un número entre 0 y 10.")
	}


}//FIN DE LA FUNCIÓN