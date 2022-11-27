import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import "./itemdetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import swal from "sweetalert";
import cartContext from "../../storage/CartContext";


function ItemDetail(product){

  const [isInCart, setIsInCart] = useState(false);

  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {    

    swal({
      title: "Gracias por escogernos!",
      text: `Agregadaste ${count} unidades de ${product.title} al Carrito`,
      icon: "success",
    });

    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart);

    setIsInCart(true);
  }


  return (
    <div className="detail-card bg">
      <div className="detail-img">
        <img src={product.image} alt="Product img" />
      </div>
      <div className="detail-info">
        <Link to="/">
          <Button>Volver al Catalogo</Button>
        </Link>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="detail-price">$ {product.price}</h4>         
            
        {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={product.stock}
              />
        ) : (          
          <div>
            <Link to="/cart">
              <Button>Ver tu Compra</Button>
            </Link>
            
            <Button>Remover del Carro</Button>            
          </div>
          
            )}
                    
        </div>
      </div>
      );

}

export default ItemDetail