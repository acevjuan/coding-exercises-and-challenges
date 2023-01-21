// Creando clase ProductManager.
class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  };
  // Agrega un producto a arreglo de productos.
  // Valida que no existan productos repetidos y que todos los campos sean obligatorios.
  addProduct() {
    return 'testing addProduct method...';
  };
  // Devuelve arreglo con prudctos agregados.
  getProducts() {
    return 'testing getProducts method...';
  };
  // Busca arreglo a través del id suministrado por el usuario.
  // Devuelve error en caso de que el id no exista.
  getProductById() {
    return 'testing getProductById method...';
  };
};