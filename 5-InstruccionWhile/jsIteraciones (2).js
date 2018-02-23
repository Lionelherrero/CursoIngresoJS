function Mostrar()
{
	var contador;

	//Nros. descendentes del 10 al 1.
	//Hago que el contador empiece en 10.
	contador=10; 

	//Creo la iteración y me aseguro de que entre.
	while (contador>0) // Se va a ejecutar hasta que contador = 0.
	{
		document.write("<br> "+contador); // !!! Escribo primero, sino el 10 no sale.
		contador--; //Disminuyo el contador en 1 ejecución
	}


}//FIN DE LA FUNCIÓN