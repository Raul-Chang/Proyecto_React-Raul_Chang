import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";



function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {        
        setProduct(itemsDB);
      })
      .catch((error) => {
        setFeedbackMsg(`Error: ${error.message}`);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading)
    return (      
        <Loader color="red" size={160} speed={0.8} />      
    );

  return (
    <div>
      {feedbackMsg ? (
        <span style={{ backgroundColor: "pink" }}>{feedbackMsg}</span>
      ) : (
    <ItemDetail 
          key={product.id}
          id={product.id}
          title = {product.title}
          price = {product.price}
          image =  {product.image}
          description =  {product.description}
          stock = {product.stock}
        />
    )} </div>
  );
}

export default ItemDetailContainer;
