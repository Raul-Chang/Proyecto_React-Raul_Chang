import React, { useContext } from "react";
import "./cartwidget.css"
import cartContext from "../../storage/CartContext";

function CartWidget() {
  const { totalItemsInCart } = useContext(cartContext);
  
  return (
  <div>
    {/* <img src="/img/cart-blank.png" alt="cart widget" className="cart-widget" /> */}
    <div className="cart-widget">🛒
    {totalItemsInCart() > 0 ? (
        <>
          <span>{totalItemsInCart()}</span>
        </>
      ) : (
        <></>
      )}
    </div>
  </div>);
}

export default CartWidget;