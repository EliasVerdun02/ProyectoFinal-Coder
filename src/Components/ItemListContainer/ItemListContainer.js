
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({greetings})=>{  

    return(
        <div className='contenedor-itemList'>
            <img src="https://essential.vteximg.com.br/arquivos/grid_logo_header.png?v=636588804222430000" className="img-itemContainer"/>
            <h2 className='item'>{greetings}</h2> 
            <ItemList/>
            <ItemDetailContainer id={4}/>
        </div>
    )
}

export default ItemListContainer;
