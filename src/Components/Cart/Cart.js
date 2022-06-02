import { useCartContext } from '../../context/CartContext'
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import '../Cart/Cart.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Cart(){

    const [ok,setOk] = useState(true)
    const {cartList,vaciarCarrito,deleteProdCart,precioTotal} = useCartContext()

    useEffect(()=>{
        setTimeout(() => {
            setOk(false)
        }, 1500);
    })
        
    return(
        <div className='cart'>
            <Link to='/' className='home-button'><span><BiArrowBack/></span>Volver </Link>
            <p className={ok ? 'text-carrito' : 'text-carrito extends' }>MI CARRITO</p>
            {
                cartList.length ?
                cartList.map(prod => {
                    return(
                        <div className='prod-cart' key={prod.id} >
                            <img src={prod.img}></img>
                            <div className='cart-text'>
                               <section className='section-text'>
                                 <p className={ok ? 'section-title' : 'section-title extends-text'} >PRODUCTO</p>
                                 <p className='cart-text-name'>{prod.name} </p>
                               </section>
                               <section className='section-text'>
                                 <p className={ok ? 'section-title' : 'section-title extends-text'} >PRECIO</p>
                                 <p className='cart-text-price'>${prod.price} </p>
                               </section>
                               <section className='section-text'>
                                 <p className={ok ? 'section-title' : 'section-title extends-text'} >CANTIDAD</p>  
                                 <p className='cart-text-cant'>{prod.cantidad}</p>
                               </section>
                               <section className='section-text'>
                                 <p className={ok ? 'section-title' : 'section-title extends-text'} >TOTAL</p>  
                                 <p className='cart-text-total'>${(prod.price * prod.cantidad).toFixed(3)} </p>
                               </section>
                               <button onClick={()=> deleteProdCart(prod.id)}  className='delete-button'><TiDeleteOutline/></button>
                            </div>
                            
                        </div>
                    )
                })
                
                :
                <p>El carrito esta vacio</p>
            }
            {
            precioTotal() ?
            <section className='section-total'>
                <p className='section-title'>TOTAL</p>
                <p className='section-total-valor'>${precioTotal()}</p>
            </section>:
            <p></p>
            }
            {
                cartList.length ?
                <button onClick={vaciarCarrito} className='button-vaciar'>Vaciar <span><AiFillDelete/></span></button>
                :
                <p></p>
                
            }
        </div>
    )
}

export default Cart