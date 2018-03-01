function Mostrar()
{
	var numeroIngresado;
	var cantidadNumerosPares=0;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	for (i=1; i <= numeroIngresado; i++)
	{
		//para saber si es par, i dividido 2
		// tiene que ser = 0
		if (i%2 == 0) 
		{
			document.write("<br>"+i);
			cantidadNumerosPares++;
		}
	}

	document.write("<br>La cantidad de números pares es: "+cantidadNumerosPares);



}//FIN DE LA FUNCIÓN