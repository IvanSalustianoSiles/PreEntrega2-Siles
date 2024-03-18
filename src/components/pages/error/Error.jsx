import { Link } from "react-router-dom"
import style from "./error.module.css"
const {backgroundDiv, gridDiv} = style;
export const Error = () => {
  return ( 
  <div className={gridDiv}>
      <div className={backgroundDiv}>
        <div> Oops! Parece que hemos tenido un error buscando la página que quisiste encontrar.</div>
            <Link to="/">
                <button>Regresar al menú principal</button>
            </Link>
    </div>
  </div>
  )
}
