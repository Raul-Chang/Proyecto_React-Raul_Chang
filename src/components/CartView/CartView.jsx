import React, { useContext } from "react";
import { createBuyOrderFirestoreWithStock } from "../../services/firebase";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BuyForm from "./BuyForm";
import "./cartview.css";
import Flexx from "../Flexx/Flexx";

function CartView() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();  

  if (cart.length === 0) return(
    <div className="margin">
      <div>
        <img src="/img/carro_vacio.jfif" alt="" />
      </div>
      <div className="margin">
      <Link to="/">
          <Button>Volver al Catalogo</Button>
      </Link>
      </div>      
    </div>
  );

  function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
      clear();
      navigate(`/checkout/${orderId}`);
      swal({
        title: `Gracias por tu compra`,
        text: `El identificador de tu orden es ${orderId}`,
        icon: "success",
      });
    });
  }

  return (
    <div className="bg">
      <div>
      <h1 className="checkout-yellow">Productos en tu Carro de Compras</h1>
       </div>
      <Flexx >
      <div className="bg">
      {cart.map((cartItem) => (
        <div key={cartItem.id} className="cart-item">
          <div>
          <img src={cartItem.image} alt={cartItem.title} />
          </div>
          <div>
          <h3 className="cart-title">{cartItem.title}</h3>
          <h4>$ {cartItem.price}</h4>
          <h4>Cantidad: {cartItem.count}</h4>
          <h4>Precio a pagar: {cartItem.count * cartItem.price}</h4>
          <Button onClick={() => removeItem(cartItem.id)} type="danger">
            Eliminar Producto
          </Button>
          </div>
          
        </div>
      ))}
      </div>
      <div>
      <Button type="danger" onClick={clear}>
        Vaciar Carrito
      </Button>
      <h2 className="checkout-yellow">Total a pagar: ${totalPriceInCart()}</h2>
      <BuyForm onSubmit={createBuyOrder} />
      </div>      
      </Flexx>
    </div>
    
      
      
      
      
    
  );
}

export default CartView;
