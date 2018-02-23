function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	
	// while (sexo != "f" || sexo != "m") loop infinito, siempre se cumpliría la condición. Alguno de los dos siempre va a ser distinto
	while ( sexo != "f" && sexo != "m")
	{
		alert("Error. Ingrese f o m.");

		sexo = prompt("ingrese f ó m .");
	}

	/*
	if(sexo=="f")
	{
		document.getElementById('Sexo').value="femenino";
	}
	else
	{
		document.getElementById('Sexo').value="masculino";
	}
	*/

	if(sexo=="f")
	{
		sexo="femenino";
	}
	else
	{
		sexo="masculino";
	}

	document.getElementById('Sexo').value="su sexo es: "+sexo;
		

}//FIN DE LA FUNCIÓN