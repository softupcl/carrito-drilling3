import Carrito from "../clases/Carrito.mjs"

export const renderCarrito = () =>{

  const carrito = new Carrito()
  const productosCarrito = carrito.obtenerProductos;

  console.log(productosCarrito);

}

renderCarrito();