import React from "react";
import Flexx from "../Flexx/Flexx";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";


function ItemList(props) {  
  let emptyArray = props.productsList.length === 0;

  return (
    <Flexx>  

{emptyArray ? 
        props.feedbackMsg ? 
          <span style={{ backgroundColor: "pink" }}>{props.feedbackMsg}</span>
          :
          <div>
            <h2 style={{color: "white"}}>Pagina no Encontrada</h2>
          <Loader color="red" size={160} />
          </div>
      : 
      props.productsList.map((product) => (
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