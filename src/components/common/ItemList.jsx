import { Item } from "./Item"


export const ItemList = ({products}) => {

  return (
    <>
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
    </>
  )
}


