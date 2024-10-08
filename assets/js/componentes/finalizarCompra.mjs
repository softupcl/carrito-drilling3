import Carrito from "../clases/Carrito.mjs"

const resumenLista = document.querySelector('#resumen')
const totalCarrito = document.querySelector('#total')


export const finalizarCompra = () =>{
 
    if(!localStorage.getItem('carrito')){
        throw new Error ('Carrito no encontrado')
    }

    const productosCarrito = JSON.parse(localStorage.getItem('carrito'))

    const carrito = productosCarrito.map((producto)=>
        `
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">Cantidad : ${producto.cantidad}</div>
                    ${producto.title}
                </div>
            <span class="badge text-bg-primary resumenLista">$${producto.price * 1000}</span>
          </li>
        `
    ).join("");


    const total = productosCarrito.reduce((acc, item) =>item.price + acc, 0) * 1000

    resumenLista.innerHTML = carrito
    totalCarrito.innerText = total
}

finalizarCompra()