function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var iteraciones=50; // para saber el porcentaje, se saca afuera del while
	var promedio;

	while (contador<iteraciones)
	{
		contador++;
		numero=prompt("ingrese un número");
		numero=parseInt(numero);

		acumulador= acumulador+numero;
		//promedio=acumulador/contador; va afuerda sino se repite tantas veces como iteraciones
	}


promedio=acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN