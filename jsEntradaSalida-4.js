/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre= prompt("ingresa tu nombre");
	document.getElementById('elNombre').value= nombre;
	//toma el nombre y el valor del nombre lo muestra en el cuadro de texto
}

