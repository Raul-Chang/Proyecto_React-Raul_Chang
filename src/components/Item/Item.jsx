import React from "react";
import Button from "../Button/Button";
import "./item.css";
import { Link } from "react-router-dom";

function Item(product) {

  let urlDetail = `/detalle/${product.id}`;

  return (
    <div className="card">
      <Link to={urlDetail}>
      <div className="card-img">
        
        <img src={product.image} alt="monitor photo"/>
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>        
         
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      
        <Button>Mas Información!</Button>
        
      </Link>
    </div>
  );
}

export default Item;
