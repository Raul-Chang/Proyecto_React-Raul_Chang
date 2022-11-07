import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => alert(error));
  }, [id]);

  return (
    <ItemDetail 
          key={product.id}
          id={product.id}
          title = {product.title}
          price = {product.price}
          image =  {product.image}
          description =  {product.description}
          stock = {product.stock}
        />
  );
}

export default ItemDetailContainer;
