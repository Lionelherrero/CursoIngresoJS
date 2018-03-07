//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var anchoDelTerreno;
	var largoDelTerreno;
	var perimetro;

	anchoDelTerreno=document.getElementById('ancho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	largoDelTerreno=prompt("Ingrese el largo del terreno:");
	largoDelTerreno=parseInt(largoDelTerreno);
	document.getElementById('largo').value=largoDelTerreno;
	

	perimetro=(2*anchoDelTerreno)+(2*largoDelTerreno);
	perimetro=6*perimetro;

	alert("Se necesitan "+perimetro+" m. de alambrado para colocar 6 hilos de alambrado.");
}

