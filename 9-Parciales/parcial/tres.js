function Mostrar()
{
	var largo;
	var ancho;
	var perímetro;
	var resultado;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perímetro=(2*largo)+(2*ancho);

	resultado=perímetro*3;
	resultado=parseInt(resultado);

	alert("Se necesita un hilo de: "+resultado+" metros.");

}
