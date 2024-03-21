import { ItemCount } from "../../common/itemCount/ItemCount"
import style from "./ItemDetail.module.css"
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";

export const ItemDetail = ({imageUrl, title, price, description, stock, category, onAdd, error, varQuantity}) => {
  return (
    <>
      {error ? <div>{error}</div> : <div>
        <Link to="/">
          <button><IoArrowUndoOutline/>Volver al menú principal</button>
        </Link>
        <Link to={`/category/${category}`}>
        <img className={style.imgItem} src={imageUrl} alt={title} />
        <button>Visitar categoría<IoArrowRedoOutline/></button>
        </Link>
        <h3>{title}</h3>
        <h3>${price}</h3>
        <h3>{description}</h3>
        <h3>{`(${stock} disponibles)`}</h3>
        <ItemCountContainer stock={stock} varQuantity={varQuantity} onAdd={onAdd}/>
      </div>}
    </>
  )
}
