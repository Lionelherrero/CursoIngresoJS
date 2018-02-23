function Mostrar()
{
	var contador;

	//Empiezo el contador en 0 (ascendente del 1 al 10)
	contador=0

	//Escribo la iteración
	while (contador<10) //Se ejecuta hasta que el contador = 10
	{
		contador=contador+1; //le agrego 1 al contador cada vez que se ejecute el código
		document.write("<br> "+contador); //!! escribo después, no quiero que
										  //salga el 0.
	}



}//FIN DE LA FUNCIÓN