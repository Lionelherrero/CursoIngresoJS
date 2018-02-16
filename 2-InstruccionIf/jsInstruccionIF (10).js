function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaDelExamen;

	notaDelExamen=Math.floor(Math.random()*10)+1;

	if (notaDelExamen < 4)
	{
		alert("Vamos, la próxima se puede");
	}
	else
	{
		if (notaDelExamen < 9)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("EXCELENTE");
		}
	}

}//FIN DE LA FUNCIÓN