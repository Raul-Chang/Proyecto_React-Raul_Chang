import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/CartContext";
import CartView from "./components/CartView/CartView";
import Checkout from './components/Checkout/Checkout';


function App() {  
  return (
    <div className="App">   
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a World of PC"/>}
          />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer greeting="Bienvenidos a World of PC"/>}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartView/>} />
          <Route
              path="/checkout/:orderid"
              element={<Checkout/>}
            />
        </Routes>
      </BrowserRouter> 
    </CartContextProvider>     
    </div>
  );
}

export default App;
