
import '../Item/Item.css'
import { Link } from "react-router-dom"


function Item({id, title, price ,stock, pictureUrl,marca}){


    return(
        <article className="item-info">
            <div className="container-header-info">
               <img src={pictureUrl} className="item-img"/>
               <div className="header-text-info">
                   <img src={marca} className="info-marca"></img>
                   <Link to={`/detalle/${id}`} className="info-text">{title}</Link>
               </div>
            </div>
            <div className="container-footer-info">
               <p className="info-price">${price}</p>
               
            </div>
        </article>
    )
}

export default Item