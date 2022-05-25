import {RiShoppingCartFill} from "react-icons/ri"
import { Link } from "react-router-dom"

function CartWidget(){
    return(
        <i className="marcas__item item-cart">
       
               <RiShoppingCartFill/>
            
        </i>
    )
}

export default CartWidget