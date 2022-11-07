import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <div className="App">      
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

        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
