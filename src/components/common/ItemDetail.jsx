import { ItemCount } from "./ItemCount"

export const ItemDetail = ({imageUrl, title, price, description, stock}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3>{description}</h3>
      <h3>{`(${stock} disponibles)`}</h3>
      <ItemCount stock ={stock}/>
      <button>Agregar al carrito</button>
    </div>
  )
}
