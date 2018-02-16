function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese un número:");
	numeroDos=prompt("Ingrese otro número:");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if (numeroUno == numeroDos)
	{
		resultado= numeroUno * numeroDos;
		document.write(resultado);

	}
	else
	{
		if (numeroUno > numeroDos)
		{
			resultado= numeroUno - numeroDos;
			document.write(resultado);
		}
		else
		{
			resultado= numeroUno + numeroDos;
			document.write(resultado);
		}

	}
}
