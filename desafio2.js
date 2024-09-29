
/* Creá 3 variables:

Una para asignar el nombre del producto (nombreProducto)
Una para el precio por unidad (precioUnitario) con sus respectivos valores 
Y otra que almacenará la cantidad deseada por el usuario (cantidadDeseada) 

Creá un prompt donde se le pregunte al usuario la cantidad que desea comprar y que esa respuesta se almacene en cantidadDeseada.
Luego calcular el costo total de la compra multiplicando el precioUnitario por la cantidadDeseada

Utilizá alert() para informar al usuario sobre el costo total de su compra. */

let precioUnitario = 1500;
let nombreProducto = "vaso";
alert("El valor unitario de "+nombreProducto+ " es $" +precioUnitario);
let valor = prompt("Cuantas unidades deseas comprar?");
let cantidadDeseada = parseInt(valor);
let precioFinal = precioUnitario * cantidadDeseada;
alert("El precio final de los "+cantidadDeseada+" "+nombreProducto+"s es de $"+precioFinal);