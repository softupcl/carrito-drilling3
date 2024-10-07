import Carrito from "../clases/Carrito.mjs"

const divCarrito = document.querySelector('#mostraCarrito');
const carritoVacio = document.querySelector('#carritoVacio');
const tbody = document.querySelector('.table-group-divider')
tbody.innerHTML = ''

export const renderCarrito = () => {
    if (!localStorage.getItem('carrito')) {
        divCarrito.style.display = 'none';
        carritoVacio.style.display = 'block';
    }else{

        const productosEnCarrito = JSON.parse(localStorage.getItem('carrito'));

        console.log(productosEnCarrito);

       
      const carrito = productosEnCarrito.map((producto, index) =>
      ` 
       <tr>
            <th scope="row">${index + 1}</th>
            <td>${producto.title}</td>
            <td>${producto.cantidad}</td>    
            <td>${producto.price * 1000}</td>
        </tr>`
        ).join('')
        tbody.innerHTML = carrito
        carritoVacio.style.display = 'none';
        divCarrito.style.display = 'block';
    }
 }


    



