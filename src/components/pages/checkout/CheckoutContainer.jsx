import { useState } from "react"
import { Checkout } from "./Checkout"

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: ""
});
  const sendForm = (event) => {
    event.preventDefault();
    console.log(userInfo.name + " " + userInfo.lastName);
  }
  const getInfo = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  }
  return (
    <Checkout sendForm={sendForm} getInfo={getInfo}/>
  )
}
