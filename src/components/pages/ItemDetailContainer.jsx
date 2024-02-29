import { useEffect, useState } from "react"
import { ItemDetail } from "../common/itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../productsMock";

export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProduct(id)
    .then((resp) => {
      setItem(resp)
      setIsLoading(false);
    })
  }, [])
  return (
    <>
      {isLoading ? <img src="../../../multimedia/Spinner-1s-200px.gif" alt="Cargando producto..."/> : <ItemDetail {...item}/>}
    </>
  )
}
