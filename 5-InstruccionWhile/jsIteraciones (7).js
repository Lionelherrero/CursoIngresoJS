function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(confirm("Si desea ingresar un número, presione aceptar"))
	/*while(respuesta=="si") //depende lo que diga arriba*/
	{
		contador=contador+1;

		numero=prompt("ingrese un número");
		numero=parseInt(numero);
		
		//validar si es un numero:
		while (isNaN(numero))
		{
			numero=prompt("ingrese un número");
			numero=parseInt(numero);
		}

		//Si se toca cancelar, devuelve null
		/*
		opcion 2: 
			if (numero==null)
			{
				respuesta="no";
				continue // corta la ejecución y vuelve a
						 // la condición
			}

		contador++;
		
		opción 3:

		while (confirm()) // Devuelve true o false

		opción 4: (no sirve si se equivoca el usuario)

		parseInt() devuleve NaN si no se ingresa número

		while (isNan (numero)) devuleve true o false

		validar que es un numero

		while (isNan (numero))
		{
			numero=prompt();
			numero=parseint(numero);
		}

		*/

		acumulador= acumulador+numero;

		//respuesta= prompt("Para continuar, si");
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN