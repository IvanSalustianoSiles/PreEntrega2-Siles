import { useState } from "react";

export const ItemCount = ({stock, initial = 1}) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    count < stock && setCount(count + 1);
  }
  const decrement = () => {
    count > 0 && setCount(count - 1);
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}