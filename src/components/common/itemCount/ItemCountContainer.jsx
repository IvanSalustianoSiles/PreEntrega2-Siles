import { useState } from "react";
import { ItemCount } from "./ItemCount"


export const ItemCountContainer = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial);
    const increment = () => {
      count < stock && setCount(count + 1);
    }
    const decrement = () => {
      count > 0 && setCount(count - 1);
    }
  return (
    <ItemCount decrement={decrement} increment={increment} count={count} stock={stock} onAdd={onAdd}/>
  )
}