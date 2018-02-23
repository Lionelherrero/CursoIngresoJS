function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var numero=0;
	var maximo; //no le podemos dar valor
	var minimo; //no le podemos dar valor

	
	var respuesta='si';

	while (respuesta!='no')
	{
		numero=prompt("Ingrese un número:");
		numero=parseInt(numero);

		while (isNaN(numero))
		{
			numero=prompt("ingrese un número");
			numero=parseInt(numero);
		}

		// Cuando no sabemos el max. o mín. Usamos el contador de bandera
		// para saber cuando es la primera 1ª vez
		// que ingresa el máximo=mínimo

		// Si fuese de 1 a 10
		//Max=0 y Min=11;
		if (contador == 0)
		{
			contador++;
			maximo=numero;
			minimo=numero;
		}
		else
		{
			//minimo=numero;
		

			if (numero > maximo)
			{
				maximo=numero;
			}
			else
			{
				if (numero < minimo)
				{
					minimo=numero;
				}
			}
		}
		respuesta=prompt("Si desea salir escriba no");	
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN