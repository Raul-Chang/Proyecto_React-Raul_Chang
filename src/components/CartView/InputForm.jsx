import React from "react";
import ImputError from "./ImputError";

function InputForm(props) {
  return (
    <div className="form-input">
      <div> 
      <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      </div>
      
      <input
        required
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}  
        className={props.name} 
      />
      <ImputError id={props.name}/>
    </div>
  );
}

export default InputForm;
