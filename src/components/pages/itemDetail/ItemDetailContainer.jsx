import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../../common";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { PropagateLoader } from "react-spinners";
import { database } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import style from "./ItemDetail.module.css";
export const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {addToCart, getQuantityById} = useContext(CartContext);
  let varQuantity = getQuantityById(id);
  useEffect(() => {
    let productsCollection = collection(database, "products");
    let refDocument = doc(productsCollection, id);
    getDoc(refDocument).then(resp => {
      setItem({...resp.data(), id: resp.id});
      if (resp.data() == null) {
        let error = `No se ha encontrado el producto de id "${id}".`
        setItem({error});
      }
    }).finally(() => setIsLoading(false));
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
      {isLoading ? <div className={style.spinner}><PropagateLoader color="#9B1B01" size={30} speedMultiplier={1.2}/></div> : <ItemDetail {...item} varQuantity={varQuantity} onAdd={onAdd}/>}
    </>
  )
}
