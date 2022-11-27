import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getItemsFromAPI, getItemsFromAPIByCategory } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


function ItemListContainer(props) {
  const [productsList, setProductsList] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid)
      .then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .catch( error=>{
        setFeedbackMsg(error.message)
      })
      .finally( () => setIsLoading(false))
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .finally( () => setIsLoading(false))
    }
  }, [categoryid]);

  if (isLoading)
    return (      
        <Loader color="red" size={160} speed={0.8} />      
    );


  return (
    <div className="bg">
      <h2 className="greeting">{props.greeting}</h2>
      
      <ItemList feedbackMsg={feedbackMsg} productsList={productsList}/> 
    </div>

  );   
}

export default ItemListContainer;