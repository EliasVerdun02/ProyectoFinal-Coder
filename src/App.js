import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js";
import Brand from "./Components/Brand/Brand.js";


function App() {
  return (

    <BrowserRouter>
         <div className="App">
            <NavBar/>
            <Brand/>
            <Routes>
               <Route path="/" element = {<ItemListContainer greetings={'ItemListContainer'}/> } />
               <Route path="/categoria/:categoriaId" element = {<ItemListContainer greetings={'ItemListContainer'}/> } />
               <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/> 



               <Route path="/*" element= { <Navigate to='/' replace />} />
            </Routes>
         </div>
    </BrowserRouter>
    
  );
}

export default App;
