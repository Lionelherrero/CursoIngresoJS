/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var precioLampara;
 	var marca;
 	var precioSinDescuento;
 	var precioConDescuento;
 	var ingresosBrutos;

 	cantidadLamparas= document.getElementById('Cantidad').value;
 	cantidadLamparas= parseInt(cantidadLamparas);

 	precioLampara= 35;

 	marca= document.getElementById('Marca').value;

 	precioSinDescuento= cantidadLamparas * precioLampara;

 	

 	switch (cantidadLamparas)
 	{
 		case 5:
 				if (marca == "ArgentinaLuz")
 				{
 					precioConDescuento= precioSinDescuento -  (precioSinDescuento * 0.4);
 				}
 				else
 				{
 					precioConDescuento= precioSinDescuento -  (precioSinDescuento * 0.3);
 				}
 				break;
 		case 4:
 				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 				{
 					precioConDescuento= precioSinDescuento -  (precioSinDescuento * 0.25);
 				}
 				else
 				{
 					precioConDescuento= precioSinDescuento -  (precioSinDescuento * 0.2);

 				}
 				break;
 		case 3:
 				if (marca == "ArgentinaLuz")
 				{
 					precioConDescuento= precioSinDescuento - (precioSinDescuento * 0.15);
 				}
 				else
 				{
 					if (marca == "FelipeLamparas")
 					{
 						precioConDescuento= precioSinDescuento - (precioSinDescuento * 0.1);
 					}
 					else
 					{
 						precioConDescuento= precioSinDescuento - (precioSinDescuento * 0.05);
 					}
 				}
 				break;
 		case 2:
 		case 1:
 				precioConDescuento= precioSinDescuento;
 				break;
 		default:
 				precioConDescuento= precioSinDescuento -  (precioSinDescuento * 0.5);
 	}

 	if (precioConDescuento > 120)
 	{
 		ingresosBrutos= precioConDescuento * 0.1;
 		precioConDescuento= precioConDescuento + ingresosBrutos;
 		alert("Usted pago "+ ingresosBrutos +" de IIBB.");
 	}

 	document.getElementById('precioDescuento').value= precioConDescuento;

 }
