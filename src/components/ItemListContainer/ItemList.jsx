import React from "react";
import Flexx from "../Flexx/Flexx";
import Item from "../Item/Item";

function ItemList(props) {
  console.log(props.productsList)
  return (
    <Flexx>
      {props.productsList.map((product) => (
        <Item 
          key={product.id}
          id={product.id}
          title = {product.title}
          price = {product.price}
          image =  {product.image}
          description =  {product.description} 
          stock = {product.stock}
          
        />
        
      ))}
    </Flexx>
  );
}

export default ItemList;