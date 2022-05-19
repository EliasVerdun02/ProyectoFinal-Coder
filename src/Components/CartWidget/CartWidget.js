import {RiShoppingCartFill} from "react-icons/ri"
import { Link } from "react-router-dom"

function CartWidget(){
    return(
        <a href="#!" className="marcas__item item-cart">
       
               <RiShoppingCartFill/>
            
        </a>
    )
}

export default CartWidget