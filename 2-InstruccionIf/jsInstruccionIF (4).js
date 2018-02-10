function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;
edad=parseInt(edad)

if (edad <= 17 && edad >= 13)
{
	alert("Es adolescente");
}

/*
if (edad >= 13)
{
	if (edad <=17 )
  {
	alert("Es adolescente");
  }
}*/



}//FIN DE LA FUNCIÓN