import style from "./Navbar.module.css"
import { CartWidget } from "../../common/CartWidget"
import { Link, Outlet } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { SearchEngine } from "../../common/SearchEngine/SearchEngine";
import { useState } from "react";
export const Navbar = () => {
  const showSearchEngine = () => {
    let searchForm = document.getElementById("searchEngine");
    let firstSearchButton = document.getElementById("firstSearchButton");
    firstSearchButton.classList.add("_disabled_1rnhg_1");
    searchForm.classList.remove("_disabled_1rnhg_1");
  }
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
        <div>
          <button id="firstSearchButton" onClick={showSearchEngine}><CiSearch color="red" size={22}/></button>
          <SearchEngine/>
        </div>
      </ul>
      <Link to="/cart"><CartWidget /></Link>
    </div>
  )
}
