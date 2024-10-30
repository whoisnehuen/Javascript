let Procesador = {
    marca : "Intel core",
    precio : 300000,
    modelo : "i5",
    color : "none",
    envioGratis : true,
}

let Gabinete = {
    marca : "Sentey",
    precio : 60000,
    modelo : "office",
    color : "rojo",
    envioGratis : true,
}

let Motherboard = {
    marca : "MSI",
    precio : 150000,
    modelo : "B206",
    color : "gris",
    envioGratis : true,
}

let Mouse = {
    marca : "Genius",
    precio : 5600,
    modelo : "USB",
    color : "rojo",
    envioGratis : false,
}

let Teclado = {
    marca : "Genius",
    precio : 7800,
    modelo : "Bluetooth",
    color : "rosa",
    envioGratis : false,
}

let Auriculares = {
    marca : "JBL",
    precio : 10000,
    modelo : "Bluetooth",
    color : "azul",
    envioGratis : false,
}

let Productos = [Procesador, Gabinete, Motherboard, Mouse, Teclado, Auriculares];

for (i=0; i < Productos.length; i++){
    console.log("Hola" + i);
}