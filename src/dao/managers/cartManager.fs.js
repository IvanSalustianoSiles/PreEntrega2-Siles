import fs from "fs";
import myCarts from "../../../carts-mock.js";
import myProducts from "../../../products-mock.js";

// Clase para controlar los métodos referentes a los carritos.
class CartManager {
    constructor() {
      this.cartsArray = [];
      this.id = 0;
      this.path = `./cart.json`;
      this.getting = false;
    }
    createCart() {
      this.readFileAndSave();
  
      let newCart = {
        id: "",
        products: [],
      };
      const CartIdsArray = this.cartsArray.map((cart) => {
        return cart.id;
      });
      CartIdsArray.sort((a, b) => a - b); // En caso de que se desordene el array, si sumamos de uno en uno podemos encontrarnos con IDs repetidos, así que, para evitar problemas, lo ordenamos
      if (CartIdsArray != "") {
        // de menor a mayor y a la última posición del array le sumamos uno, para siempre tener un número mayor en la siguiente ID, no importa en qué orden se borre o agregue productos.
        this.id = CartIdsArray[CartIdsArray.length - 1] + 1;
      } else {
        this.id = this.id + 1;
      }
      newCart = { ...newCart, id: this.id };
      this.cartsArray.push(newCart);
      this.updateFile(this.cartsArray);
      console.log(`El producto de ID "${newCart.id}" fue agregado.`);
  
      return newCart;
    }
    getProdsOfCartById(cid) {
      this.getting = true;
      this.readFileAndSave();
      let gottenCart = this.cartsArray.find((cart) => cart.id == cid);
      if (gottenCart) {
        return gottenCart["products"];
      } else {
        console.log(`No se encontró el producto que coincida con la id "${cid}".`);
      }
      this.getting = false;
    }
    addProduct(id, cid) {
      this.readFileAndSave();
      let newProduct = {
        id: id,
        quantity: 1
      }
      if (!Object.values(newProduct).includes(undefined)) {
        let myCart = this.cartsArray.find(cart => cart.id == cid);
        if (myCart) {
          let myProduct = myCart["products"].find(product => product.id == id);
          if (myProduct) {
            let indexOfProd = myCart["products"].indexOf(myProduct);
            newProduct["quantity"] = myProduct["quantity"] + newProduct.quantity;
            myCart["products"].splice(indexOfProd, 1);
            myCart["products"].push(newProduct);
            console.log(`Ahora hay ${myProduct["quantity"]} productos de ID ${id} en el carrito de ID ${cid}.`);
          } else {
            console.log(`Producto de ID ${id} agregado.`);
            myCart["products"].push(newProduct);
          }
          this.updateFile(this.cartsArray);
          return myCart;
        } else {
          console.log(`El carrito de ID ${cid} no fue encontrado.`);
        }
      } else {
        console.log(`El producto que intentabas ingresar no contiene las propiedades adecuadas.`);
      }
    }
    updateFile(array) {
      fs.writeFileSync(`${this.path}`, JSON.stringify(array));
    }
    readFileAndSave() {
      if (fs.existsSync(this.path)) {
        let fileContent = fs.readFileSync(this.path, "utf-8");
        let parsedFileContent = JSON.parse(fileContent);
        this.cartsArray = parsedFileContent;
      } else if (this.getting) {
        console.log("ERROR: El archivo que intentas leer no existe.");
      }
      return this.cartsArray;
    }
};

// Carritos y productos de ejemplo para agregar y probar el algoritmo.
const [cart1, cart2, cart3, cart4] = myCarts;
const [product1, product2, product3, productCambiado] = myProducts;

// CartManager de ejemplo para probar el algoritmo.
let CartManagerFS = new CartManager; 

export default CartManagerFS;