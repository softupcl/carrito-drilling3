import { renderCarrito } from "./componentes/renderCarrito.mjs";
import { renderProductos } from "./componentes/renderProductos.mjs";

export const consumoApi = async () => {

  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json();
 
  return data

}

const productos = await consumoApi();
renderProductos(productos);

const botonCarrito = document.querySelector('#btnCarrito')
botonCarrito.addEventListener('click', renderCarrito);






