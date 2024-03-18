import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer, Error, Cart, CheckoutContainer } from "./components/pages/"
import { Navbar } from "./components/layout/navbar/Navbar"
import { Footer } from "./components/layout/Footer"
import Layout from "./components/layout/Layout"
import CartContextProvider from "./context/CartContext"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/checkout" element={<CheckoutContainer/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </>
)}

export default App