import { useContext, useEffect } from "react"
import { FaCartPlus } from "react-icons/fa"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
  const {getTotalProducts} = useContext(CartContext);
  return (
    <div>
        <FaCartPlus color="#101820"/>
        <span>{getTotalProducts()}</span>
    </div>
  )
}
