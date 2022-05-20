import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'


function ItemDetail({item}){
    
    const [valorC,setValorC] = useState(true)

    const onAdd =(valor)=>{
        setValorC(false)
        alert(`Se agregaron ${valor} ${item.name}`)
    }

    return(
        <div>
            <article className='container-details'>
                <img src={item.img} className="details-img"></img>
                <div className='container-info-details'>
                   <div className='info-name-marca'>
                      <p className='info-marca-details'>{item.marca}</p>
                      <p className='info-name-details'>{item.name}</p>
                   </div>
                   <p className='info-price-details'>{item.price}</p>

                   <p className='info-envio-details'>{item.envio}</p>
                   <p className='info-talle-details'>Elegi tu talle ARG</p>
                   <ul>
                       {
                          item.talles.map((item) => {
                            return(
                                <li key={item}> {item} </li>
                            )
                          })
                       }
                    </ul>
                    {
                        valorC ? 
                        <ItemCount  initial={1} stock={item.stock} onAdd={onAdd}/>
                        :
                        <div className='button-cart-container'>
                            <Link to='/cart'><button className='button-cart'>Ir al Carrito</button></Link>
                            <Link to='/'><button className='button-cart seguir'>Seguir comprando</button></Link>
                        </div>
                    }
                </div>
            </article>
        </div>
    )
}

export default ItemDetail