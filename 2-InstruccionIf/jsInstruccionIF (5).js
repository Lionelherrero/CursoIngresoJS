function Mostrar()
{
//tomo la edad  
var edad

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad < 13 || edad > 17) // || porque tiene que ser uno u otro ningún nro cumple los dos &&
{
	alert("No es adolescente");
}

}//FIN DE LA FUNCIÓN