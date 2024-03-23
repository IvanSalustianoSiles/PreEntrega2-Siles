import { useEffect } from "react";
import { useCount } from "../../../hooks/useCount";
import style from "./CartProduct.module.css"
import { Link } from "react-router-dom";

export const CartProduct = ({title, imageUrl, id, quantity, removeById, stock, settingQuantity, getProductPrice}) => {
    const {CartProductImg, detailButton, productCard} = style;

    const {count, increment, decrement} = useCount(stock, 1, quantity);

    useEffect(() => {
        settingQuantity(id, count);
    }, [count]);

    return <div className={productCard}>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} className={CartProductImg}/>
        <div>
            <button disabled={count > 1 ? false : true} onClick={decrement}>-</button>
            <span>{count}</span>
            <button disabled={count < stock ? false : true} onClick={increment}>+</button>
        </div>
        <div>${getProductPrice(id)}</div>
        <Link to={`/product/${id}`}>
            <button className={detailButton}>Detalles</button>
        </Link>
        <button onClick={() => removeById(id)}>Eliminar</button>
    </div>
}
