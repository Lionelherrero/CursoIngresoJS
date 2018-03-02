function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese un número:");
	numeroUno=parseInt(numeroUno);

	while (isNaN(numeroUno))
	{
		alert("Error. Debe ingresar un número.")
		numeroUno=prompt("Ingrese un número:");
		numeroUno=parseInt(numeroUno);
	}

	numeroDos=prompt("Ingrese otro número:");
	numeroDos=parseInt(numeroDos);

	while (isNaN(numeroDos))
	{
		alert("Error. Debe ingresar un número.")
		numeroDos=prompt("Ingrese un número:");
		numeroDos=parseInt(numeroDos);
	}

	if (numeroUno == numeroDos)
	{
		resultado=numeroUno * numeroDos;
	}
	else
	{
		if (numeroUno > numeroDos)
		{
			resultado=numeroUno - numeroDos;
		}
		else
		{
			resultado=numeroUno + numeroDos;
		}
	}

	document.write(resultado);
	

	
}
