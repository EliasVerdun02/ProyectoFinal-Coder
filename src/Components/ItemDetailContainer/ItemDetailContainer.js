import { useEffect, useState } from "react";
import {traerProds} from "../../funciones/funciones";
import '../../productos/productos'
import '../ItemDetailContainer/ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({id}){

    const [item,setItem] = useState(null)

    const filtrarProd = (productos, id) => productos.find((itemP) => itemP.id === id);

    const getItem = async (id, setState)=>{
        try{
            const esperarProductos = await traerProds;
            setTimeout(()=>{
                setState(filtrarProd(esperarProductos, id))
            },2000)
            
        } catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getItem(id,setItem)
    },[id])

    return(
        <div className="container-itemDetail">
            {item ? <ItemDetail item={item}/>  : <p className="obteniendo-producto">Obteniendo producto...</p>}
        </div>
    )
}

export default ItemDetailContainer