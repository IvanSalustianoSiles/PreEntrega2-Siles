import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const addToCart = (newProduct, id) => {
        let productExists = cart.some(newProduct => newProduct.id === id);
        if (productExists) { //Si el producto existe, se pisan las cantidades.
            let fixedCart = cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {...product, quantity: newProduct.quantity}
                } else {
                    return product;
                }
            })
            setCart(fixedCart);
            localStorage.setItem("cart", JSON.stringify(fixedCart));
        } else { //Si no existe, agregalo al carrito.
            setCart([...cart, newProduct]);
            localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
        }
    }
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    }
    const removeById = (idToRemove) => {
        let filteredCart = cart.filter(product => product.id !== idToRemove);
        setCart(filteredCart);
        localStorage.setItem("cart", JSON.stringify([filteredCart]));
    }
    const settingQuantity = (id, count) => {
        let toCountCart = cart.map((product) => {
            if (product.id == id) {
                return {...product, quantity: count}
            } else {
                return product;
            }
        })
        setCart(toCountCart);
        localStorage.setItem("cart", JSON.stringify(toCountCart));
    }
    const getTotalProducts = () => {
        let totalProducts = cart.reduce((acc, product) => {
            return acc + product.quantity
        }, 0)
        return totalProducts;
    }
    const getTotalPrice = () => {
        let totalPrice = cart.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0)
        return totalPrice;
    }
    const getProductPrice = (id) => {
        let valuedProduct = cart.find(product => product.id === id);
        let productPrice = valuedProduct.quantity * valuedProduct.price;
        return productPrice;
    }
    const getQuantityById = (id) => {
        let product = cart.find(product => product.id === id);
        return product && product.quantity;
    }
    return <CartContext.Provider value={{cart, addToCart, clearCart, removeById, settingQuantity, getTotalProducts, getTotalPrice, getProductPrice, getQuantityById}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider
