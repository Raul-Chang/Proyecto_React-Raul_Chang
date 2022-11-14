import { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);

    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.id === itemData.id) {
          itemInCart.count += itemData.count;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {      
      setCart((newCart) => {
        newCart.push(itemData);
        return newCart;
      });
    }
  }

  function totalItemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function totalPriceInCart(){
    
  }

  function removeItem(itemId){
    /*  cart.filter */
  }

  function clear(){
    /*  */
  }

  const value = {
    cart,
    addToCart,
    totalItemsInCart,
  };

  //3.Creamos el "value" para los componentes que consuman el context

  return (
    //4. retornamos el Context Provider con el value creado
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;