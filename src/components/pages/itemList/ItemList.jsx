import { Item } from "../../common/item/Item"
import styles from "./ItemList.module.css"
import { AgregarDocs } from "../../../AgregarDocs"
export const ItemList = ({products}) => {

  return (
  <div className={styles.allItems}>
    {
      products.map(({id, title, description}) => {
        return (
          <Item 
            key={id} 
            id={id}
            title={title} 
            description={description} 
          />
        )
      })
    }
  </div>)
}


