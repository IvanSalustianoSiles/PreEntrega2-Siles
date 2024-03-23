import { useState } from "react"
import { Checkout } from "./Checkout"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { products } from "../../../productsMock";

export const CheckoutContainer = () => {
  const {cart, getTotalPrice, clearCart} = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
});
  const sendForm = (event) => {
    event.preventDefault();
    let order = { 
      buyer: userInfo,
      items: cart,
      total: getTotalPrice()
    }
    let ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, order).then(resp => setOrderId(resp.id));
    cart.forEach(({id, stock, quantity}) => {
      updateDoc(doc(database, "products", id), {stock: stock - quantity})
    })
    clearCart();
  }
  const getInfo = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  }
  const copyText = () => {
    navigator.clipboard.writeText(orderId);
  }
  return (
    <Checkout sendForm={sendForm} orderId={orderId} getInfo={getInfo} copyText={copyText}/>
  )
}
