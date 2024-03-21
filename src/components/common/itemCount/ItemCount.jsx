import { useState } from "react";

export const ItemCount = ({decrement, increment, count, stock, varQuantity, onAdd}) => {

  return (
    <div>
      <div>
        <button disabled = {count === 1 ? true : false} onClick={decrement}>-</button>
        <span>{count}</span>
        <button disabled = {count === stock ? true : false} onClick={increment}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}