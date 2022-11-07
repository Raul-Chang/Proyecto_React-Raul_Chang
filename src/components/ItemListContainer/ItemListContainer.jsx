import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI, {
  getItemsFromAPIByCategory,
} from "../../mockService/mockService";
import { useParams } from "react-router-dom";


function ItemListContainer(props) {  
  
  const [productsList, setProductsList] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductsList(itemsDB);
      });
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      });
    }
  }, [categoryid]);

  return (
    <div className="bg">
      <h2 className="greeting">{props.greeting}</h2>
      
      <ItemList productsList={productsList}/> 
    </div>

  );   
}

export default ItemListContainer;