import React from 'react'
import Flexx from "../Flexx/Flexx";

async function CheckoutData(data) {

    let buyer = data.buyer
    console.log(buyer)

  return (
    <Flexx>
            <div className="bg">
                {orderData.items.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
            <div>
                <img src={cartItem.image} alt={cartItem.title} />
            </div>
            <div>
                <h3>{cartItem.title}</h3>
                <h4>$ {cartItem.price}</h4>
                <h4>Cantidad: {cartItem.count}</h4>
            </div>          
            </div>
            ))}
            </div>  
        </Flexx>   
  )
}

export default CheckoutData