function Mostrar()
{
  var importeUsuario;
  var importeFinal;

  importeUsuario=prompt('Ingrese el importe:');

//Recordar utilizar parseInt() para pasar el literal a número!!!!
  parseInt(importeUsuario);

  importeFinal=parseInt(importeUsuario)+(parseInt(importeUsuario)*0.21);

    document.getElementById('importeFinal').value=importeFinal;

}
