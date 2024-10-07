import { renderProductos } from "./componentes/renderProductos.mjs";

export const consumoApi = async () => {

  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json();

  
  return data

}

const productos = await consumoApi();

// productos.map(producto => {
//   const claseProductos=new Producto(producto)
// });

renderProductos(productos);







