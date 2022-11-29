import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
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
        swal(error)
      })
      .finally( () => {
        setIsLoading(false)        
    })
      }, [orderid]);
   

      if (isLoading)
      return (      
          <Loader color="red" size={160} speed={0.8} />      
      ); 

  return (
    <div>
        <div className="checkout-data">
            <h1 className="checkout-yellow"> {orderData.buyer.name} Gracias por tu Compra</h1>

            <h2 className="checkout-yellow">Tu numero de orden es:</h2>
            <h3 className="checkout-white">{orderid}</h3>

            <h2 className="checkout-yellow">Total de la compra:</h2>
            <h3 className="checkout-white">${orderData.total}</h3>
            
            <h2 className="checkout-yellow">Dirección de Entrega:</h2>
            <h3 className="checkout-white">{orderData.buyer.address}</h3>

            <h2 className="checkout-yellow">Enviamos tu factura a {orderData.buyer.email}</h2>            
            
            <h2 >Listado de Productos:</h2>  
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