import { useEffect, useState } from "react";
import {SiNike} from "react-icons/si";
import {SiPuma} from "react-icons/si";
import {SiJordan} from "react-icons/si";
import {SiAdidas} from "react-icons/si";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
// import './script.js'

function NavBar(){
    const [valor, setValor] = useState('nav__info-container')
    const [ok,setOk] = useState(false)

    const mostrar=()=>{
       setOk(!ok)
    }

    useEffect(()=>{
      ok ? setValor(valor + ' nav__info-container-desplegar') : setValor('nav__info-container')
      
    },[ok, valor])

    

    // useEffect(()=>{
      
    // })

    // function mostrar(){
    //     console.log(valor)
    //     setValor('nav__info-container nav__info-container-desplegar')
    // }



    return(
        <div> 

            <header>
               <div className={valor}>
                <a href="#1" className='info__item'>SALE</a>
                <a href="#1" className='info__item'>NEW IN</a>
                <a href="#1" className='info__item'>HOMBRE</a>
                <a href="#1" className='info__item'>MUJER</a>
               </div>      
            </header>

            <nav className="nav"> 
              <div className='nav__marcas-container'>
                <CartWidget/>
                <Link to='/categoria/nike' className='marcas__item'><SiNike/></Link>
                <Link to='/categoria/adidas' className='marcas__item'><SiAdidas/></Link>
                <div className="boton">
                  <input type={'checkbox'} className='btn-animado' onClick={()=> mostrar()}></input>
                  <label className='animado'></label>
                </div>
                <Link to='/categoria/jordan' className='marcas__item'><SiJordan/></Link>
                <Link to='/categoria/puma' className='marcas__item'><SiPuma/></Link>
              </div>
            </nav>

            

            

        </div>
    )
}

export default NavBar