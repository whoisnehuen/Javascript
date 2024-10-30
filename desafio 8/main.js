let Procesador = {
    nombre : "Procesador",
    marca : "Intel core",
    precio : 300000,
    modelo : "i5",
    color : "none",
    envioGratis : true,
}

let Gabinete = {
    nombre : "Gabinete",
    marca : "Sentey",
    precio : 60000,
    modelo : "office",
    color : "rojo",
    envioGratis : true,
}

let Motherboard = {
    nombre : "Motherboard",
    marca : "MSI",
    precio : 150000,
    modelo : "B206",
    color : "gris",
    envioGratis : true,
}

let Mouse = {
    nombre : "Mouse",
    marca : "Genius",
    precio : 5600,
    modelo : "USB",
    color : "rojo",
    envioGratis : false,
}

let Teclado = {
    nombre : "Teclado",
    marca : "Genius",
    precio : 7800,
    modelo : "Bluetooth",
    color : "rosa",
    envioGratis : false,
}

let Auriculares = {
    nombre: "Auriculares",
    marca : "JBL",
    precio : 10000,
    modelo : "Bluetooth",
    color : "azul",
    envioGratis : false,
}

let Productos = [Procesador, Gabinete, Motherboard, Mouse, Teclado, Auriculares];

for (i=0; i < Productos.length; i++){
    let caja = document.querySelector("#contenedor");
   
    let titulo = document.createElement("h2");
    titulo.innerText = Productos[i].nombre;
    caja.appendChild(titulo);

    let _marca = document.createElement("p");
    _marca.innerText = "Marca : " + Productos[i].marca;
    caja.appendChild(_marca);

    let _modelo = document.createElement("p");
    _modelo.innerText = "Modelo : " + Productos[i].modelo;
    caja.appendChild(_modelo);

    let _color = document.createElement("p");
    _color.innerText = "Color : " + Productos[i].color;
    caja.appendChild(_color);

    let _precio = document.createElement("p");
    _precio.innerText = "Precio : $" + Productos[i].precio;
    caja.appendChild(_precio);

    let _envio = document.createElement("p");
    if (Productos[i].envioGratis == true){
        _envio.innerText= "Con envio gratis!"
    }
    else{
         _envio.innerText= "SIN envio gratis"
    }
    caja.appendChild(_envio);
}