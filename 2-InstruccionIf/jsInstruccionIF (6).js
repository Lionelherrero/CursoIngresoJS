function Mostrar()
{
//tomo la edad  

	var edad;

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if (edad > 17)
	{
		alert("Es mayor de edad");
	}
	else /* if (edad < 18 && edad >= 13) */
	{
		if (edad > 12)
		{
			alert("Es adolescente");
		} 
		else
		{
			alert("Es un niño");
		}
	}
	/*
	Uso más el microprocesador:
	if(edad<13)
	{
		alert("niño");
	}
	if (edad>12 && edad<18)
	{
		alert("adolescente");
	}
	if (edad>17)
	{
		alert("mayor");
	}
	*/


}//FIN DE LA FUNCIÓN