function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

edad=parseInt(edad);

if (edad >= 18)
{
	alert("Es mayor de edad");
}
else if (edad < 18 && edad >= 13)
{
	alert("Es adolescente");
}
else
{
	alert("Es un niño");
}


}//FIN DE LA FUNCIÓN