import { memo, useEffect, useState } from "react"
import '../../productos/productos'
import Item from "../Item/Item"
import {getFirestore, collection, getDocs , query, where} from 'firebase/firestore'
import '../ItemList/ItemList.css'

import { useParams } from "react-router-dom"

const ItemList = memo( 
    ()=>{
    const [prods,setProds] = useState([])

    const {categoriaId} = useParams()



    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db,'productos')

        if(categoriaId){
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryCollectionFilter)
            .then(resp => setProds( resp.docs.map(producto => ({id: producto.id, ...producto.data()}) )))
            .catch(err => console.log(err))
        }else{
            const db = getFirestore()

            const queryCollection = collection(db,'productos')
            getDocs(queryCollection)
            .then(resp => setProds( resp.docs.map(producto => ({id: producto.id, ...producto.data()}) )))
            .catch(err => console.log(err))
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
// (oldProps, newProps) => oldProps.prods.length === newProps.prods.length //Si es false re-render
)
export default ItemList
