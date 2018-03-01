function Mostrar()
{
	var numeroIngresado;
	var cantidadDivisores=0;

	numeroIngresado=prompt("Ingrese un número para conocer sus divisores:");
	numeroIngresado=parseInt(numeroIngresado);

	for (i=1; i <= numeroIngresado; i++)
	{
		
		//busco los números que divididos por i
		//den resto 0 para saber los divisores
		if (numeroIngresado%i == 0)
		{
			document.write("<br>"+i);
			cantidadDivisores++;
		}
	}

	document.write("<br>La cantidad de divisores es: "+cantidadDivisores);



}//FIN DE LA FUNCIÓN