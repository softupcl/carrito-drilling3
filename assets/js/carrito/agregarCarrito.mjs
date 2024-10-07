import Carrito from "../clases/Carrito.mjs";

let carrito;
export const agregarProductoCarrito = (evento) => {
    let produtoAgregado = JSON.parse(evento.target.getAttribute('marcador'));

    produtoAgregado.cantidad = 1

    if (!carrito) {
        carrito = new Carrito(produtoAgregado)
     } else {
         carrito.agregarProductos = produtoAgregado;
     }

}

