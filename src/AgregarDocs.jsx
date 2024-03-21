import React from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { products } from './productsMock'
import { database } from './firebaseConfig'

export const AgregarDocs = () => {
    const fill = () => {
        let productsCollection = collection(database, "products");
        products.forEach(product => {
            addDoc(productsCollection, product);
        })
    }
  return (
    <button onClick={fill}>Agregar documentos</button>
  )
}
