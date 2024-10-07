import Carrito from "../clases/Carrito.mjs";

let carrito;
export const agregarProductoCarrito = (evento) => {
  
    let produtoAgregado = JSON.parse(evento.target.getAttribute('marcador'));

    if (!carrito) {
        carrito = new Carrito(produtoAgregado)
        produtoAgregado.cantidad = 1
     } else {
         carrito.agregarProductos = produtoAgregado;
         produtoAgregado.cantidad = 1
     }

    localStorage.setItem('carrito', JSON.stringify(carrito.obtenerProductos))
}

