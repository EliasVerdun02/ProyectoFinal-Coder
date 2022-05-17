import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'


function ItemDetail({item}){

    

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
                    <ItemCount  initial={1} stock={item.stock} onAdd={   (valor)=>  alert(`Se agregaron ${valor} ${item.name}`)}/>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail