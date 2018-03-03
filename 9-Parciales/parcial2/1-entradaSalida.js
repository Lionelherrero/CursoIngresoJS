//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetro;

	base=document.getElementById('lado').value;
	base=parseInt(base);

	perimetro=3*base;

	alert("El perímetro es: "+perimetro);
	
}

