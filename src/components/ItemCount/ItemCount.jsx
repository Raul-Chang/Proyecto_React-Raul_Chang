import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
  const [count, setCount] = useState(1);

  function counterMinus() {    
    if (count > 1) setCount(count - 1);
  }

  function counterPlus() {    
    if (count < stock) setCount(count + 1);
  }

  

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <Button onClick={counterMinus}>
          -
        </Button>
        <span>{count}</span>
        <Button onClick={counterPlus}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <Button onClick={() => onAddToCart(count)}>{text}</Button>
      </div>
    </div>
  );
}

export default ItemCount;
