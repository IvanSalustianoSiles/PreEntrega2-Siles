import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useWordStandard } from "../../../hooks/useWordStandard"
import style from "./SearchEngine.module.css"
const {disabled} = style;
export const SearchEngine = () => {
  const [title, setTitle] = useState(useWordStandard(JSON.parse(localStorage.getItem("title")) || "").fixedWord);
  const [inputValue, setInputValue] = useState(JSON.parse(localStorage.getItem("title")) || "");
  const [inputPlaceHolder, setInputPlaceHolder] = useState(JSON.parse(localStorage.getItem("title")) || "Buscar material");
  const getTitle = (event) => {
    const {fixedWord} = useWordStandard(event.target.value);
    setInputValue(event.target.value);
    setTitle(fixedWord);
  }
  const searchProduct = () => {
    let searchInput = document.getElementById("searchInput");
    let searchForm = document.getElementById("searchEngine");
    let firstSearchButton = document.getElementById("firstSearchButton");
    searchForm.classList.add(disabled);
    firstSearchButton.classList.remove(disabled);
    localStorage.setItem("title", JSON.stringify(inputValue));
    setInputPlaceHolder(searchInput.value);
    localStorage.setItem("openedSearchEngine", JSON.stringify("false"));
  }
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()} id="searchEngine" className={disabled}>
        <Link to={`/${title}`}>
          <button onClick={searchProduct}><CiSearch color="red" size={22}/></button>
        </Link>
        <input onChange={getTitle} value={inputValue ? inputValue : ""} id="searchInput" placeholder={inputPlaceHolder}/>
      </form>
    </>
  )
}