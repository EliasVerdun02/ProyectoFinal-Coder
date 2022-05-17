import { useEffect, useState } from "react";
import {SiNike} from "react-icons/si";
import {SiPuma} from "react-icons/si";
import {SiJordan} from "react-icons/si";
import {SiAdidas} from "react-icons/si";
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
                <a href="#1" className='info__item'>NEW IN</a>
                <a href="#1" className='info__item'>SALE</a>
                <a href="#1" className='info__item'>HOMBRE</a>
                <a href="#1" className='info__item'>MUJER</a>
               </div>      
            </header>

            <nav className="nav"> 
              <div className='nav__marcas-container'>
                <CartWidget/>
                <a href="#1" className='marcas__item'><SiNike/></a>
                <a href="#1" className='marcas__item'><SiAdidas/></a>
                <div className="boton">
                  <input type={'checkbox'} className='btn-animado' onClick={()=> mostrar()}></input>
                  <label className='animado'></label>
                </div>
                <a href="#1" className='marcas__item'><SiJordan/></a>
                <a href="#1" className='marcas__item'><SiPuma/></a>
              </div>
            </nav>

            

            

        </div>
    )
}

export default NavBar