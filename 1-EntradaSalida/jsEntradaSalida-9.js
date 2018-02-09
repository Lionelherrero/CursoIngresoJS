/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;

	sueldo=parseInt(sueldo);

	resultado= sueldo + (sueldo*0.10);

	/*resultado= sueldo * 1.10 (es el 100% -sueldo- + 10% = 110% = 1.1)

	resultado=parseInt(resultado);*/

	document.getElementById('resultado').value=resultado;

	
}
