function Mostrar()
{
  var importePrompt;
  var importeFinal;

  importePrompt=prompt("Ingrese el importe");
  importePrompt=parseInt(importePrompt);

  importeFinal=importePrompt - (importePrompt*0.25);

  document.getElementById('importeFinal').value=importeFinal;
}
