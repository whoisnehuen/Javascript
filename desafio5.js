/*
En este desafío, practicaremos el uso de arrays y bucles en JavaScript para gestionar productos en un e-commerce.

Vamos a empezar creando un array de Productos:

Para mostrar el contenido del array vamos a utilizar un “bucle for” para recorrer el mismo e imprimir en la consola cada uno de los productos.

Ahora vamos a actualizar el stock:

Utilizaremos otro “bucle for” para simular la venta de productos. Reduce el stock de productos eliminando el último con el método “pop” e imprime en la consola el nuevo stock después de la venta.
*/

let Productos = ["papel", "lapiz", "borrador", "lapicera", "marcador", "tinta", "cuaderno", "regla", "compas", "pincel"];
console.log("Nuestros productos:");
for(let i=0; i< Productos.length; i++){
    console.log(Productos[i]);
}

for (let x=0; x<10; x++){
    console.log("Nuestro stock ahora:");
    Productos.pop();
    console.log(Productos);
}

