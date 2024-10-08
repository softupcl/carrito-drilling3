class Carrito {
    #carrito 
    constructor(producto) {
      this.#carrito = [producto];
    }
  
    get obtenerProductos() {
      return this.#carrito
    }

    set agregarProductos(producto) {
      console.log(producto)
      this.#carrito.push(producto)
      
    }
    
  }


  export default Carrito
  