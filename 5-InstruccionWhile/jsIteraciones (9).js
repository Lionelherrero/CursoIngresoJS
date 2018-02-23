function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var numero=0;
	var maximo;
	var minimo;

	
	var respuesta='si';

	while (respuesta!='no')
	{
		numero=prompt("Ingrese un número:");
		numero=parseInt(numero);

		contador++;

		if (contador == 1)
		{
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