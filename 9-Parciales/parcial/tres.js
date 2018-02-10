function Mostrar()
{
	var largo;
	var ancho;
	var perímetro;
	var hilosAlambrado;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perímetro= (2*largo) + (2*ancho);

	hilosAlambrado=parseInt(perímetro/3);


	alert("Se necesitan 3 hilos de: "+hilosAlambrado+" metros");

}
