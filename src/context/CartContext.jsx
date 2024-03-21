import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newProduct, id) => {
        let productExists = cart.some(newProduct => newProduct.id === id);
        if (productExists) {
            let fixedCart = cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {...product, quantity: newProduct.quantity}
                } else {
                    return product;
                }
            })
            setCart(fixedCart);
        } else {
            setCart([...cart, newProduct]);
        }
        console.log(cart);
    }
    const clearCart = () => {
        setCart([]);
    }
    const removeById = (idToRemove) => {
        let filteredCart = cart.filter(product => product.id !== idToRemove);
        setCart(filteredCart);
    }
    const settingQuantity = (id, count) => {
        let toCountCart = cart.map((product) => {
            if (product.id == id) {
                console.log("Funciona");
                return {...product, quantity: count}
            } else {
                console.log("No funciona");
                return product;
            }
        })
        setCart(toCountCart);
        console.log(cart[0].quantity);
    }
    const getTotalProducts = () => {
        let totalProducts = cart.reduce((acc, product) => {
            return acc + product.quantity
        }, 0)
        return totalProducts;
    }
    const getTotalPrice = () => {
        let totalPrice = cart.reduce((acc, product) => {
            console.log(product.price);
            return acc + (product.price * product.quantity);
        }, 0)
        return totalPrice;
    }
    const getProductPrice = (id) => {
        let valuedProduct = cart.find(product => product.id === id);
        let productPrice = valuedProduct.quantity * valuedProduct.price;
        return productPrice;
    }
    const getQuantityById = (id, count) => {
        let product = cart.find(product => product.id === id);
        return product && product.quantity;
    }
    return <CartContext.Provider value={{cart, addToCart, clearCart, removeById, settingQuantity, getTotalProducts, getTotalPrice, getProductPrice, getQuantityById}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider
