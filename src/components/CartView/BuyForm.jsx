import React, { useState } from "react";
import InputForm from "./InputForm";

export default function BuyForm(props) {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  }); 

  let errName = false
  let errPhone = false
  let errEmail = false
  let errAddress = false

  function onInputChange(evt) {
    let inputName = evt.target.name;
    let value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);

    if(userData.name !== "" &&userData.name.length < 20){
      let errorName = document.getElementById("name");
      errorName.style.display = "none"
      let inputName = document.querySelector(".name");
      inputName.style.borderColor = "black"
      inputName.style.borderWidth = "medium"
    } 
    if (userData.phone !== "" && userData.phone.length < 20){
      let errorPhone = document.getElementById("phone");
      errorPhone.style.display = "none"
      let inputPhone = document.querySelector(".phone");
      inputPhone.style.borderColor = "black"
      inputPhone.style.borderWidth = "medium"
    } 
    if (userData.email !== "" && userData.email.length < 20){
      let errorEmail = document.getElementById("email");
      errorEmail.style.display = "none"
      let inputEmail = document.querySelector(".email");
      inputEmail.style.borderColor = "black"
      inputEmail.style.borderWidth = "medium"
    } 
    if (userData.address !== "" && userData.address.length < 30){
      let errorAddres = document.getElementById("address");
      errorAddres.style.display = "none"
      let inputAddress = document.querySelector(".address");
      inputAddress.style.borderColor = "black"
      inputAddress.style.borderWidth = "medium"
    }
   
  }

  function onSubmit(evt) {
    evt.preventDefault();
    validar();
    
  }

  function validar(){
    if(userData.name === "" || userData.name.length > 20){
      let errorName = document.getElementById("name");
      errorName.style.display = "flex"
      let inputName = document.querySelector(".name");
      inputName.style.borderColor = "red"
      inputName.style.borderWidth = "thick"    
      errName = true  
    } 
    if (userData.phone === "" || userData.phone.length > 20){
      let errorPhone = document.getElementById("phone");
      errorPhone.style.display = "flex"
      let inputPhone = document.querySelector(".phone");
      inputPhone.style.borderColor = "red"
      inputPhone.style.borderWidth = "thick"
      errPhone = true  
    } 
    if (userData.email === "" || userData.email.length > 20){
      let errorEmail = document.getElementById("email");
      errorEmail.style.display = "flex"
      let inputEmail = document.querySelector(".email");
      inputEmail.style.borderColor = "red"
      inputEmail.style.borderWidth = "thick"
      errEmail = true 
    } 
    if (userData.address === "" || userData.address.length > 30){
      let errorAddres = document.getElementById("address");
      errorAddres.style.display = "flex"
      let inputAddress = document.querySelector(".address");
      inputAddress.style.borderColor = "red"
      inputAddress.style.borderWidth = "thick"
      errAddress = true 
    } 
    if(!(errName || errEmail || errPhone || errAddress)){      
      props.onSubmit(userData);} 
    }

  return (
    <div className="form-bg">
      <h2> Finalizar Compra</h2>
      <form onSubmit={onSubmit} className="form">
      <InputForm
        title="Nombre:"
        name="name"
        value={userData.name}
        onInputChange={onInputChange}           
      />     

      <InputForm
        title="Email:"
        name="email"
        value={userData.email}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Teléfono:"
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Direccion:"
        name="address"
        value={userData.address}
        onInputChange={onInputChange}
      />   

      <button type="submit" onClick={onSubmit}>Crear Orden</button>
    </form>  
    </div>    
  );
}
