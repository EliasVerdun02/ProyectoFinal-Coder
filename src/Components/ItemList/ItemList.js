import { useEffect, useState } from "react"
import '../../productos/productos'
import { traerProds } from "../../funciones/funciones"
import Item from "../Item/Item"
import '../ItemList/ItemList.css'

function ItemList(){
    const [prods,setProds] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        traerProds
        .then((res)=> setProds(res))
        .finally(()=> setLoad(!load))
    },[])

    return(
        <div className="contenedor-items">
            {
                load ? 
                <h1>Cargando...</h1>
                :
                
                    prods.map((producto) => {
                        return(
                            <div key={producto.id}>
                                <Item
                                   pictureUrl={producto.img}                  
                                   marca={producto.marca}
                                   title={producto.name}
                                   price={producto.price}
                                   stock={producto.stock}                            
                                />
                            </div>
                        )
                    })
                
            }
        </div>
    )
    
}

export default ItemList
