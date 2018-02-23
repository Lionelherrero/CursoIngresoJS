function Mostrar()
{
	//Solicito la clave
	var clave = prompt("Ingrese el número clave:");

	while (clave != "utn750") //Si la clave es incorrecta, la pide de nuevo
	{
		//Mensaje de error
		alert("Error. Reingrese la clave."); 
		//Prompt para reingresar la clave y
		// (!!!) le asigno ese valor a var clave
		//para volver a comprobar esa condición
		clave= prompt("Ingrese el número clave:");
	}

	document.write("Bienvenido");

}//FIN DE LA FUNCIÓN
