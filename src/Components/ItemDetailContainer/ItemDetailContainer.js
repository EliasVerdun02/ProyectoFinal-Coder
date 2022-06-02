import { useEffect, useState } from "react";
import '../ItemDetailContainer/ItemDetailContainer.css'
import '../ItemList/ItemList.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    const [item,setItem] = useState(null)
    const {detalleId} = useParams()


    useEffect(()=>{
        const db = getFirestore()
        const dbQuery = doc(db, 'productos', detalleId)
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
    },[detalleId])

    return(
        <div className="container-itemDetail">
            {item ? 
            
            <ItemDetail item={item}/>  
            : 
            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
        </div>
    )
}

export default ItemDetailContainer