function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while (respuesta=="si")
	{
		numero=prompt("ingrese un número");
		numero=parseInt(numero);

		contador=contador+1;

		if (numero > 0)
		{
			positivo=positivo+numero;
		}
		else
		{
			if (numero < 1)
			{
			 negativo=negativo*numero;
			}			
		}

		respuesta= prompt("Para continuar, si");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN