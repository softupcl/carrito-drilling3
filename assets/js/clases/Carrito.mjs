class Carrito {
    #carrito 
    constructor(producto) {
      this.#carrito = [producto];
      this.cantidad = 1;
    }
  
    get obtenerProductos() {
      return this.#carrito
    }
  
    set agregarProductos(producto) {
      this.#carrito.push(producto)
    }
  
    calcularTotal() {
       
    }
  }
  
  export default Carrito
  