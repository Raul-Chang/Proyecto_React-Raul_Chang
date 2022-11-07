import React from "react";
import Button from "../Button/Button";
import "./itemdetail.css";
import { Link } from "react-router-dom";


function ItemDetail(product){

    return (
        <div className="detail-card bg">
          <div className="detail-img">
            <img src={product.image} alt="Product img" />
          </div>
          <div className="detail-info">
            <Link to="/">
              <Button>Ir al Catalogo</Button>
            </Link>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4 className="detail-price">$ {product.price}</h4> 
            
            <div>
              <Button>Agregar al Carro</Button>
              <Button>Remover del Carro</Button>            
            </div>
            <div>
              <Button>Finalizar Compra</Button>
            </div>            
          </div>
        </div>
      );

}

export default ItemDetail