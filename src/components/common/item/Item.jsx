import { Link } from "react-router-dom"
import style from "./Item.module.css"
export const Item = ({id, title, description}) => {
  const {itemCard, detailButton} = style;
  return (
    <div className={itemCard}>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <Link to={`/product/${id}`}>
        <button className={detailButton}>Detalles</button>
      </Link>
    </div>
  )
}