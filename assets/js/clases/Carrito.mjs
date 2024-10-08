class Carrito {
    #carrito 
    constructor(producto) {
      this.#carrito = [producto];
    }
  
    get obtenerProductos() {
      return this.#carrito
    }

    // get calcularTotal(){
    //   const total = this.#carrito.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue.price,0);
      
    //   return total;
    // }
  
    set agregarProductos(producto) {
      console.log(producto)
      this.#carrito.push(producto)
      
    }
  
   


  }


  export default Carrito
  