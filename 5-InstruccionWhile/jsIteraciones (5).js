function Mostrar()
{

	var sexo = prompt("Ingrese f ó m .");

	while (sexo != "f" && sexo != "m") //Tiene que ser distinto de f y m a la vez.
	{
		alert("Error. Debe ingresar f o m.");
		sexo = prompt("Ingrese f ó m .");
	}

	if (sexo == "f")
	{
		sexo="femenino";
	}
	else
	{
		sexo="masculino";
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN