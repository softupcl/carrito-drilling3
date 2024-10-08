const divCarrito = document.querySelector('#mostraCarrito');
const carritoVacio = document.querySelector('#carritoVacio');
const tbody = document.querySelector('.table-group-divider')
const totalCarrito = document.querySelector('#total')

tbody.innerHTML = ''

export const renderCarrito = () => {
    if (!localStorage.getItem('carrito')) {
        divCarrito.style.display = 'none';
        carritoVacio.style.display = 'block';
    }else{

     const productosEnCarrito = JSON.parse(localStorage.getItem('carrito'));
      
      const carrito = productosEnCarrito.map((producto, index) =>
      ` 
       <tr>
            <th scope="row">${index + 1}</th>
            <td>${producto.title}</td>
            <td>${producto.cantidad}</td>    
            <td>${producto.price * 1000}</td>
        </tr>`
        ).join('')

        const total = productosEnCarrito.reduce((acc, item) =>item.price + acc, 0) * 1000
        tbody.innerHTML = carrito
        totalCarrito.innerText = total

        carritoVacio.style.display = 'none';
        divCarrito.style.display = 'block';
    }
 }


    



