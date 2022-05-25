import { useEffect, useState } from "react"
import '../../productos/productos'
import { traerProds } from "../../funciones/funciones"
import Item from "../Item/Item"
import '../ItemList/ItemList.css'
import { useParams } from "react-router-dom"

function ItemList(){
    const [prods,setProds] = useState([])

    const {categoriaId} = useParams()

    useEffect(()=>{
        if(categoriaId){
            traerProds
            .then((res)=> setProds(res.filter((productos)=> productos.categoria === categoriaId)))
        }else{
            traerProds
            .then((res)=> setProds(res))
        }
        
    },[categoriaId])

    return(
        <div className="contenedor-items">
            {
                prods.length ?  prods.map((producto) => {
                        return(
                            <div key={producto.id}>
                                <Item
                                   pictureUrl={producto.img}                  
                                   marca={producto.marca}
                                   title={producto.name}
                                   price={producto.price}
                                   stock={producto.stock}
                                   id={producto.id}                            
                                />
                            </div>
                        )
                    })
                
                :
                
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div> //Loader
                
            }
        </div>
    )
    
}

export default ItemList
