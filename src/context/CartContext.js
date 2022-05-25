import { createContext, useContext, useState } from "react";

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

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteProdCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider