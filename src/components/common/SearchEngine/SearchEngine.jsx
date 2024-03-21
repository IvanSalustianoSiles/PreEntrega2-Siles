import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useWordStandard } from "../../../hooks/useWordStandard"
import style from "./SearchEngine.module.css"

export const SearchEngine = () => {
  const [title, setTitle] = useState("");

  const getTitle = (event) => {
    const {fixedWord} = useWordStandard(event.target.value);
    setTitle(fixedWord);
  }
  const searchProduct = (event) => {
    event.preventDefault();
  }
  const disguiseSearchEngine = () => {
    let searchForm = document.getElementById("searchEngine");
    let firstSearchButton = document.getElementById("firstSearchButton");
    searchForm.classList.add(style.disabled);
    firstSearchButton.classList.remove(style.disabled);
  }
  return (
    <>
      <form id="searchEngine" className={style.disabled}>
        <Link to={`/${title}`}>
          <button onClick={() => {searchProduct, disguiseSearchEngine()}}><CiSearch color="red" size={22}/></button>
        </Link>
        <input onChange={getTitle} id="searchInput" placeholder="Buscar material"/>
      </form>
    </>
  )
}