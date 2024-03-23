import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";
export const Checkout = ({sendForm, getInfo, orderId, copyText}) => {
  return (
    <>
      {
        orderId == "" ? <>
        <div>Checkout</div>
        <form onSubmit={sendForm}>
          <input type="text" id="input1" placeholder="Ingrese su nombre" name="name" onChange={getInfo}/>
          <input type="tel" placeholder="Ingrese su número" name="phone" onChange={getInfo}/>
          <input type="email" placeholder="Ingrese su correo" name="email" onChange={getInfo}/>
          <button>Comprar</button>
        </form>
      </> : <>
        <div>¡Gracias! Su orden de compra es {orderId}<button onClick={copyText}><MdContentCopy/></button></div>
        <Link to="/">
          <button>Seguir comprando</button>
        </Link>
        </>
      }
    </>
  )
}
