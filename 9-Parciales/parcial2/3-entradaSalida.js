//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	largo=document.getElementById("largo").value;
	largo=parseInt(largo);

	perimetro=(2*ancho)+(2*largo);
	perimetro=6*perimetro;

	alert("Se necesitan "+perimetro+" metros de alambre para colocar 6 hilos.");
}

