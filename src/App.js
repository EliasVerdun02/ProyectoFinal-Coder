import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";
import NavBar from "./Components/NavBar/NavBar";



function App() {

  return (
    <div className="App">
       <NavBar/>
       <ItemListContainer greetings={'ItemListContainer'}/>
    </div>
    
  );
}

export default App;
