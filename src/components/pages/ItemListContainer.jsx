import { useState, useEffect } from "react"
import { ItemList } from "../common";
import { getProducts } from "../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [ products , setProducts ] = useState([]);
  const [ isLoading , setIsLoading ] = useState(true);
  const {category} = useParams();
  useEffect(() => {
    setIsLoading(true);
    getProducts()
    .then((resp) => {
      if (category) {
        const filteredProducts = resp.filter(product => product.category === category )
        setProducts(filteredProducts);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    })
  }, [category])

  return (
    <>
      {isLoading ? <img src="../../../multimedia/Spinner-1s-200px.gif" alt="Cargando productos..."/> : <ItemList products={products}/>}
    </>
  )
}