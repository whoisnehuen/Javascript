/*
Crea una función llamada sumarProductos() que acepte dos parámetros: precioUnitario y cantidadDeseada.
La función debe calcular y devolver mediante un console.log el total gastado en un producto multiplicando el precio por la cantidad comprada.
*/

function sumarProductos(precioUnitario, cantidadDeseada){
    let precio = precioUnitario * cantidadDeseada;
    return precio;
}

let precioU = parseFloat(prompt("Cual es el precio unitario?"));
let cantidad = parseInt(prompt("Cuantas son las cantidades deseadas?"));
let precioFinal = sumarProductos(precioU, cantidad);
alert("El precio final es de : $"+precioFinal);