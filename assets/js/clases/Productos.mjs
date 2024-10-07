class Producto {
    #productos
    constructor({id, title, description,  price, image, category, rating}){
        this.id = id; 
        this.title= title; 
        this.description = description; 
        this.price = price;
        this.image = image;
        this.category = category;
        this.rating= rating;
    }

    get obtenerProductos() {
        return this.#productos
      }
}

export default Producto