import { useContext, useEffect, useState } from "react"
import { ItemDetail } from "../../common";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {addToCart} = useContext(CartContext);
  useEffect(() => {
    getProduct(id)
    .then((resp) => {
      setItem(resp)
      setIsLoading(false);
    })
    .catch((error) => {
      setItem({...item, error: error});
      setIsLoading(false);
    })
  }, [])
  const onAdd = (quantity) => {
    const productInfo = {
      ...item,
      quantity: quantity,
    }
    addToCart(productInfo, id);
  }
  return (
    <>
      {isLoading ? <img src="../../../multimedia/favicon.png" alt="Cargando detalle..." /> : <ItemDetail {...item} onAdd={onAdd}/>}
    </>
  )
}
