import { agregarProductoCarrito } from "../carrito/agregarCarrito.mjs";

const divProductos = document.querySelector('#productos')

const renderProductos = (productos) => {
  productos.forEach((info) => {
    
    const producto =  JSON.stringify(info)

    const nodo = document.createElement('div');
    nodo.classList.add('p-2');

    const card = document.createElement('div');
    card.classList.add('card','div-card');
    

    // Imagen
    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top');
    imagen.setAttribute('src', info.image);

    
    // Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');


    // Titulo
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title','text-truncate');
    titulo.textContent = info.title;
    
    // Descripcion
    const descripcion = document.createElement('p');
    descripcion.classList.add('card-text', 'text-truncate');
    descripcion.textContent = `${info.description}`;


    // Precio
    const precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = `$${info.price *1000}`;


    // Boton
    const botoAgregar = document.createElement('button');
    botoAgregar.classList.add('btn', 'btn-primary');
    botoAgregar.textContent = 'Agregar al carrito';
    botoAgregar.setAttribute('marcador', producto);
    botoAgregar.addEventListener('click', agregarProductoCarrito);



    // Insertamos
    nodo.appendChild(card);  
    card.appendChild(imagen);
    card.appendChild(cardBody);
 
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    cardBody.appendChild(botoAgregar);
   
    divProductos.appendChild(nodo);
});
}

export {
  renderProductos
}

//
