import { Link } from "react-router-dom"
export const Item = ({id, title, description}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <Link to={`/product/${id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  )
}