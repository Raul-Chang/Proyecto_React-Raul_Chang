import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBuyOrder } from '../../services/firebase';
import Flexx from "../Flexx/Flexx";
import Loader from "../Loader/Loader";

function Checkout() {

    const [orderData, setorderData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { orderid } = useParams();    

    useEffect(() => {
        setIsLoading(true);
        getBuyOrder(orderid)
      .then((itemsDB) => {
        setorderData(itemsDB)        
      })
      .catch( error=>{
        console.erro(error)
      })
      .finally( () => {
        setIsLoading(false)
        console.log(orderData.buyer)  
        console.log(orderData.buyer.name)
    })
      }, [orderid]);
   

      if (isLoading)
      return (      
          <Loader color="red" size={160} speed={0.8} />      
      );

      

  return (
    <div>
        <div>
            <h1> {orderData.buyer.name} gracias por tu compra</h1>

            <h2>Tu numero de orden es:</h2>
            <h3>{orderid}</h3>

            <h2>Total de la compra:</h2>
            <h3>${orderData.total}</h3>
            
            <h2>Dirección de Entrega:</h2>
            <h3>{orderData.buyer.address}</h3>
            
            <h2>Listado de Productos:</h2>  
        </div>        
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
    </div>
  )
}

export default Checkout