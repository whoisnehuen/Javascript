let carrito = document.getElementById("shop");
carrito.addEventListener("click", function(){
    alert("Función no disponible :(");
});

let oferta = document.getElementById("ofertas");
oferta.addEventListener("click", function(){
    alert("Muy pronto, más novedades.");
});


let Procesador = {
    nombre : "Procesador",
    imagen: "./img/procesador.png",
    marca : "Intel core",
    precio : 300000,
    modelo : "i5",
    color : "none",
    envioGratis : true,
}

let Gabinete = {
    nombre : "Gabinete",
    imagen: "./img/gabinete.png",
    marca : "Sentey",
    precio : 60000,
    modelo : "office",
    color : "rojo",
    envioGratis : true,
}

let Motherboard = {
    nombre : "Motherboard",
    imagen: "./img/mother.png",
    marca : "MSI",
    precio : 150000,
    modelo : "B206",
    color : "gris",
    envioGratis : true,
}

let Mouse = {
    nombre : "Mouse",
    imagen: "./img/mouse.png",
    marca : "Genius",
    precio : 5600,
    modelo : "USB",
    color : "rojo",
    envioGratis : false,
}

let Teclado = {
    nombre : "Teclado",
    imagen: "./img/teclado.png",
    marca : "Logitec",
    precio : 7800,
    modelo : "Bluetooth",
    color : "rosa",
    envioGratis : false,
}

let Auriculares = {
    nombre: "Auriculares",
    imagen: "./img/auricular.png",
    marca : "JBL",
    precio : 10000,
    modelo : "Bluetooth",
    color : "azul",
    envioGratis : false,
}

let Productos = [Procesador, Gabinete, Motherboard, Mouse, Teclado, Auriculares];



for (i=0; i < Productos.length; i++){
    let caja = document.createElement("div");
    caja.classList.add("caja-producto");

    let titulo = document.createElement("h2");
    titulo.innerText = Productos[i].nombre;
    caja.appendChild(titulo);

    let _imagen = document.createElement("img");
    _imagen.src = Productos[i].imagen; // Asignar la imagen del producto
    _imagen.alt = Productos[i].nombre; // Texto alternativo
    caja.appendChild(_imagen);

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

    let btn = document.createElement("button");
    let txt = document.createElement("h3");
    btn.innerText = "Agregar al carrito";
    caja.appendChild(btn);
    txt.innerText = "Producto agregado!";
    txt.style.color = "green";

    btn.addEventListener("click", function(){
        caja.appendChild(txt);
    });

    document.querySelector("#contenedor").appendChild(caja);
}