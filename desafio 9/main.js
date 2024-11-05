let btn = document.createElement("button");
let txt = document.createElement("h3");
let contenedor = document.querySelector("#contenedor");
btn.innerText = "Agregar al carrito";
contenedor.appendChild(btn);
txt.innerText = "Producto agregado!";
txt.style.color = "green";

btn.addEventListener("click", function(){
    contenedor.appendChild(txt);
});