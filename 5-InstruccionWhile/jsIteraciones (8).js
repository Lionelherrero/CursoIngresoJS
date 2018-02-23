function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1; //si multiplico * 0 = 0
	var numero;
	
	var respuesta='si';

	while (respuesta=="si")
	{
		numero=prompt("ingrese un número");
		numero=parseInt(numero);

		while (isNaN(numero))
		{
			numero=prompt("ingrese un número");
			numero=parseInt(numero);
		}

		if (numero > 0)
		{
			positivo=positivo+numero; //positivo+=numero;
		}
		else
		{
			if (numero < 0)
			{
			 negativo=negativo*numero; //negativo*=numero
			}			
		}

		respuesta= prompt("Para continuar, si");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN