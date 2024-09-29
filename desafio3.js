/*
Imagina que estás desarrollando la lógica de precios de un E-commerce.

Declara variables para el nombre del producto (nombreProducto), el precio unitario (precioUnitario) y la cantidad deseada (cantidadDeseada). Para esta última utiliza prompt() tal como hicimos en el desafío anterior.

Ahora vamos a implementar un condicional para aplicar descuentos según la siguiente regla:
# Si la cantidad comprada es mayor o igual a 5, aplica un descuento del 10%.

Para finalizar, calcula el costo total de la compra, aplicando el descuento según la condición y mostrar el total en un alert().
*/

let nombreProducto = "girasol";
let precioUnitario = 1500;
alert("El precio unitario de "+nombreProducto+" es de: $"+precioUnitario);
let cantidadDeseada = parseInt(prompt("Cuantas unidades deseas comprar?"));

if (cantidadDeseada => 5){
    let valor = cantidadDeseada * precioUnitario * 0.9;
    alert("El precio de los " +cantidadDeseada+ " " +nombreProducto+"es es de: $"+valor);
} else{
    let valor = cantidadDeseada * precioUnitario;
    alert("El precio de los " +cantidadDeseada+ " " +nombreProducto+ "/es es de: $" +valor);
}