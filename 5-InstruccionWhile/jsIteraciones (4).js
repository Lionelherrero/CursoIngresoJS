function Mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 10:");
	// !!! Parsear el numero (sino queda como texto)
	numero= parseInt(numero);

	while (numero < 0 || numero > 10 ) //No &&, no existe numero que cumpla ambas condiciones
	{
		alert("Error. Debe ingresar un número entre 0 y 10:");
		numero = prompt("Ingrese un número entre 0 y 10:")
	}

	document.getElementById('Numero').value= numero;



}//FIN DE LA FUNCIÓN