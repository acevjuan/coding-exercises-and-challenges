// Creando clase ProductManager.
class ProductManager {
  constructor() {
    this.product = [];
  };
  // Agrega un producto a arreglo de productos. Valida que no existan productos repetidos y que todos los campos sean obligatorios.
  addProduct(title, description, price, thumbnail, code, stock) {
    if (title === "" || description === "" || price === "" || thumbnail === "" || code === "" || stock === "") {
      console.log("Not enough information to create a new product");
    } else {
      if (!this.product.length == 0) {
        const codeToCompare = this.product.find(element => element.code === code);
        if (!codeToCompare) {
          this.product.push({id: this.product.length + 1, title, description, price, thumbnail, code, stock});
        } else {
          console.log("There is already a product with that code");
        }
      } else {
        this.product.push({id: this.product.length + 1, title, description, price, thumbnail, code, stock});
      };
    };
  };
  // Devuelve arreglo con prudctos agregados.
  getProducts() {
    return this.product;
  };
  // Busca arreglo a través del id suministrado por el usuario.
  // Devuelve error en caso de que el id no exista.
  getProductById(id) {
    if (this.product.length === 0) {
      console.log("List is empty. Can't get any product by id");
    } else {
      console.log("testin getProdcutById method...");
      const idToFind = this.product.find(element => element.id === id);
      if (idToFind) {
        console.log(this.product[id - 1]);
        return this.product[id - 1];
      } else {
        console.log(`There is no product with id ${id}`);
      }
    }

  };
};


// Testing
// const productsList = new ProductManager();
// productsList.getProductById();
// productsList.addProduct(1,"hola",3,4,5,6);
// productsList.addProduct(1,"hola",3,4,5,6);
// productsList.addProduct(1,"hola",3,4,9,6);
// productsList.addProduct("a", "b", "c", "d", "e", "f");
// productsList.addProduct("a", "b", "c", "d", "juan", "f");
// const productListA = productsList.getProducts();
// console.log(productListA);
// const getElement = productsList.getProductById(3);