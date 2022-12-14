import React, { useState } from "react";
import swal from "sweetalert";
import InputForm from "./InputForm";

export default function BuyForm(props) {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    emailrep: "",
    phone: "",
    address: "",
  }); 

  let errName = false
  let errPhone = false
  let errEmail = false
  let errAddress = false
  let errEmailrep = false
  

  function onInputChange(evt) {
    let inputName = evt.target.name;
    let value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);

    if(userData.name !== "" &&userData.name.length < 25){
      let errorName = document.getElementById("name");
      errorName.style.display = "none"
      let inputName = document.querySelector(".name");
      inputName.style.borderColor = "black"
      inputName.style.borderWidth = "medium"
    } 
    if (userData.phone !== "" && userData.phone.length < 15){
      let errorPhone = document.getElementById("phone");
      errorPhone.style.display = "none"
      let inputPhone = document.querySelector(".phone");
      inputPhone.style.borderColor = "black"
      inputPhone.style.borderWidth = "medium"
    } 
    if (userData.email !== "" && userData.email.length < 25){
      let errorEmail = document.getElementById("email");
      errorEmail.style.display = "none"
      let inputEmail = document.querySelector(".email");
      inputEmail.style.borderColor = "black"
      inputEmail.style.borderWidth = "medium"
    } 
    if (userData.emailrep !== "" && userData.emailrep.length < 25){
      let errorEmailrep = document.getElementById("emailrep");
      errorEmailrep.style.display = "none"
      let inputEmailrep = document.querySelector(".emailrep");
      inputEmailrep.style.borderColor = "black"
      inputEmailrep.style.borderWidth = "medium"
    } 
    if (userData.address !== "" && userData.address.length < 40){
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
    if(userData.name === "" || userData.name.length > 25){
      let errorName = document.getElementById("name");
      errorName.style.display = "flex"
      let inputName = document.querySelector(".name");
      inputName.style.borderColor = "red"
      inputName.style.borderWidth = "thick"    
      errName = true  
    } 
    if (userData.phone === "" || userData.phone.length > 15){
      let errorPhone = document.getElementById("phone");
      errorPhone.style.display = "flex"
      let inputPhone = document.querySelector(".phone");
      inputPhone.style.borderColor = "red"
      inputPhone.style.borderWidth = "thick"
      errPhone = true  
    } 
    if (userData.email === "" || userData.email.length > 25){
      let errorEmail = document.getElementById("email");
      errorEmail.style.display = "flex"
      let inputEmail = document.querySelector(".email");
      inputEmail.style.borderColor = "red"
      inputEmail.style.borderWidth = "thick"
      errEmail = true 
    } 
    if (userData.emailrep === "" || userData.emailrep.length > 25){
      let errorEmailrep = document.getElementById("emailrep");
      errorEmailrep.style.display = "flex"
      let inputEmailrep = document.querySelector(".emailrep");
      inputEmailrep.style.borderColor = "red"
      inputEmailrep.style.borderWidth = "thick"
      errEmailrep = true
      if(userData.emailrep !== userData.email){
        swal({
          title: "Error en Compra",
          text: `Los campos de email deben ser iguales`,
          icon: "warning",
        });
      }}
      
    if (userData.address === "" || userData.address.length > 40){
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
        title="Tel??fono:"
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Email:"
        name="email"
        value={userData.email}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Repetir Email:"
        name="emailrep"
        value={userData.emailrep}
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
