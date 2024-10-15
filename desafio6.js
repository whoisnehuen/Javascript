/* 
Creá un objeto llamado producto que represente un producto de un e-commerce. 

Asignar propiedades como nombre, precio, y cantidadDisponible disponible.

Inicialmente, establece el nombre del producto como "Camiseta". 

Luego, modifica la propiedad del producto para cambiar su nombre a "Zapatillas".

Ahora vamos a añadir la propiedad “categoría” al objeto producto con un valor que represente la categoría del producto (por ejemplo, "ropa" o "calzado").

Por último, elimina la propiedad cantidadDisponible del objeto producto usando el operador delete, simulando que el producto está agotado.
*/

let producto = {
    nombre : "Camiseta",
    precio : 5000,
    cantidadDisponible : 70,
}

producto.nombre = "Zapatillas";

producto.categoria = "calzado";

delete producto.cantidadDisponible;

console.log(producto);