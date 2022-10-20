import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar/NavBar';


function App() {  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a World of PC"/>
      
    </div>
  );
}

export default App;
