import { useState, useEffect } from "react"
import { ItemList } from "../../common";
import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { useWordStandard } from "../../../hooks/useWordStandard";
import style from "./ItemList.module.css"
export const ItemListContainer = () => {
  const [ products , setProducts ] = useState([]);
  const [ isLoading , setIsLoading ] = useState(true);
  const {category} = useParams();
  const {title} = useParams();
  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(database, "products");
    let consultation = productsCollection;
    if (category) {
      let filteredProductsCollection = query(
        productsCollection, 
        where("category", "==", category)
      );
      consultation = filteredProductsCollection;
    } 
    getDocs(consultation).then(resp => {
      let collectedProducts = resp.docs.map((document) => {
        if (title) {
          const {fixedWord} = useWordStandard(document.data().title);
          return {...document.data(), title: fixedWord, id: document.id}
        } else {
          return {...document.data(), id: document.id}
        }
      })
      if (title) {
        let searchedProducts = collectedProducts.filter((document) => document.title === title);
        let reCollectedProducts = searchedProducts.map((document) => {
          for (let i = 0; i < resp.docs.length; i++) {
            const {fixedWord} = useWordStandard(resp.docs[i].data().title);
            if (fixedWord === document.title) {
              return {...document, title: resp.docs[i].data().title}
            }
          }
        })
        setProducts(reCollectedProducts);
      } else {
        setProducts(collectedProducts);
      }
      // if (products == []) {
      //   noResults = `Lo sentimos, el material que estás buscando (${title}) no se encuentra en nuestro catálogo. Prueba escribirlo de otra manera.`
      //   setProducts({noResults: noResults});
      // }
    })
    .catch(error => {
      return <div>Error 500: Internal Server Error <hr /> ({error})</div>
    })
    .finally(() => setIsLoading(false));
  }, [category, title])

  return (
    <>
      {isLoading ? <div className={style.spinner}><PropagateLoader color="#9B1B01" size={30} speedMultiplier={1.2}/></div> : <ItemList products={products}/>}
    </>
  )
}