import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer } from "./components/pages/"
import { Navbar } from "./components/layout/navbar/Navbar"
import { Cart } from "./components/common"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
)}

export default App