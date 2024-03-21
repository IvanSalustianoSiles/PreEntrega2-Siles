import { useState } from "react";
import { ItemCount } from "./ItemCount"
import { useCount } from "../../../hooks/useCount";


export const ItemCountContainer = ({stock, varQuantity, onAdd}) => {
  const {count, increment, decrement} = useCount(stock, 0, varQuantity);
  const countObject = {decrement, increment, count, stock, varQuantity, onAdd};
  return (
    <ItemCount {...countObject}/>
  )
}