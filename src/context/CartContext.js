import { createContext, useContext, useState } from "react";
import {addDoc, collection, getFirestore} from 'firebase/firestore'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=>{

     const [cartList, setCartList] = useState([])

     function addToCart(productoNuevo){
        if(cartList.some((prodCart) => prodCart.id === productoNuevo.id)){
            const cart = [...cartList]
            cart.forEach((prodPresente)=>{
                if(prodPresente.id === productoNuevo.id){
                    prodPresente.cantidad += productoNuevo.cantidad
                }
            })
            setCartList([...cart])
        }else{
            setCartList([
                ...cartList,
                productoNuevo
            ])
        }
         
     }

     const deleteProdCart = (id) => {
        const cart = [...cartList];
        let index = cart.findIndex((prodEliminar) => prodEliminar.id === id);
    
        cart.splice(index, 1);
    
        setCartList([...cart]);
      };

     const vaciarCarrito = ()=>{
         setCartList([])
     }

     const precioTotal =()=>{
         return cartList.reduce((cont, producto)=> (cont += producto.cantidad * producto.price.toFixed(3)), 0)
     }


     const cantidadTotal =()=>{
         return cartList.reduce((cont, producto)=> cont += producto.cantidad, 0)
     }

     //Procedimiento de compra

     async function generarOrden(){
        
        let orden = {}

        orden.buyer = {name:'Elias',email:'e@gmail.com',phone:'1139089244'}
        orden.date = Date()
        orden.total = precioTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price
            const cantidad = cartItem.cantidad

            return {id,name,price,cantidad}
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .finally(()=> vaciarCarrito())
    } 

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteProdCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            generarOrden
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider