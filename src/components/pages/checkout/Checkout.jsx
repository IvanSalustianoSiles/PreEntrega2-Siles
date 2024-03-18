
export const Checkout = ({sendForm, getInfo}) => {
  return (
    <>
      <div>Checkout</div>
      <form onSubmit={sendForm}>
        <input type="text" id="input1" placeholder="Ingrese su nombre" name="name" onChange={getInfo}/>
        <input type="text" placeholder="Ingrese su apellido" name="lastName" onChange={getInfo}/>
        <button>Enviar</button>
      </form>
    </>
  )
}
