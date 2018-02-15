function Mostrar()
{
//tomo la edad  
	var edad

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad < 13 || edad > 17) // || porque tiene que ser uno u otro. Ningún nro. cumple los dos &&
	{
		alert("No es adolescente");
	}

	/*
	if (edad < 18)
	{
		if (edad<13)
		{
			alert("no adolescentes");
		}
	}
	else
	{
		alert("No es adolescente");
	}
	
	*/

}//FIN DE LA FUNCIÓN