function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero=0;
	
	var negativos=0;
	var positivos=0;

	var contadorNegativos=0;	
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorNumerosPares=0;
	
	var promedioPositivos=0;
	var promedioNegativos=0;

	var diferenciaPositivosNegativos=0;

	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			alert("Error. No es un número");
			numero=prompt("Ingrese un número nuevamente.");
			numero=parseInt(numero);
		}

		if (numero < 0)
		{
			negativos=negativos+numero;
			contadorNegativos++;
		}
		else
		{
			if (numero > 0)
			{
				positivos=positivos+numero;
				contadorPositivos++;
			}
		}
		
		if (numero == 0)
		{
			contadorCeros++;
		}

		if ((numero%2)==0)
		{
			contadorNumerosPares++;
		}
		
		respuesta=prompt("¿Desea continuar?");
	}

	promedioPositivos=positivos/contadorPositivos;
	promedioNegativos=negativos/contadorNegativos;
	diferenciaPositivosNegativos=positivos-negativos;

	document.write("<br>"+"La suma de los números positivos es: "+positivos);
	document.write("<br>"+"La suma de los números positivos es: "+negativos);

	document.write("<br>"+"La cantidad de números negativos es: "+contadorNegativos);
	document.write("<br>"+"La cantidad de números positivos es: "+contadorPositivos);

	document.write("<br>"+"La cantidad de ceros es: "+contadorCeros);
	document.write("<br>"+"La cantidad de números pares es: "+contadorNumerosPares);

	if (isNaN(promedioPositivos))
	{
		document.write("<br> -");
	}
	else
	{
	 	document.write("<br>"+"El promedio de números positivos es: "+promedioPositivos);
	}

	if (isNaN(promedioNegativos))
	{
		document.write("<br> -");
	}
	else
	{
	 	document.write("<br>"+"El promedio de números negativos es: "+promedioNegativos);
	}

	document.write("<br>"+"La diferencia entre números positivos y negativos es: "+diferenciaPositivosNegativos);




}//FIN DE LA FUNCIÓN