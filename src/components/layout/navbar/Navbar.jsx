import style from "./Navbar.module.css"
import { CartWidget } from "../../common/CartWidget"
import { Link, Outlet } from "react-router-dom"
export const Navbar = () => {
  return (
    <div>
      <Link to="/">
      <img src="https://i.imgur.com/h3cbOSX.jpeg" style={{width: "250px"}} alt="logo1" />
      </Link>
      <ul className={style.categories}>
        <Link to="/">
          <button>Pagina principal</button>
        </Link>
        <Link to="/category/primario">
          <button>Primario</button>
        </Link>
        <Link to="/category/secundario">
          <button>Secundario</button>
        </Link>
        <Link to="/category/universitario">
          <button>Universitario</button>
        </Link>
      </ul>
      <Link to="/cart"><CartWidget /></Link>
    </div>
  )
}
