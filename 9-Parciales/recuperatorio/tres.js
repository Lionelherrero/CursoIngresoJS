function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	promedio= (precioUno + precioDos + precioTres)/3

	alert("El promedio es: "+promedio);
}
