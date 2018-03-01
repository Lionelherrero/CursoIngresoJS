function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	

	var maximo;

	numeroUno=prompt("Ingrese un número: ");
	numeroDos=prompt("Ingrese otro número: ");
	numeroTres=prompt("Ingrese otro número: ");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);

	maximo=numeroUno;
	
	if (numeroDos > maximo && numeroDos > numeroTres)
	{
		maximo=numeroDos;
	}
	else
	{
		if (numeroTres > maximo)
		{
			maximo=numeroTres;
		}
			
	}

	alert("El número máximo es: "+maximo);



}
