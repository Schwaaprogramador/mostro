import React from 'react';
import styled from './Store.module.css';
import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js'; 
import logo from '../../assets/img/logonegro.svg';
import { CiMenuBurger } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import camisa from '../../assets/fotos/camisanegraFront.jpg';
import camisa2 from '../../assets/fotos/camisanegraamarillaFront.jpg';
import camisa3 from '../../assets/fotos/camisaazulFront.jpg';
import camisa4 from '../../assets/fotos/camisablancaFront.jpg';
import camisa5 from '../../assets/fotos/camisablancanaranjaFront.jpg';

function Store() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);

  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);
  

  return (
    <div className={styled.container}>

      { navbarShow.status ? <Navbar/> : null }

    {/* ------------------------HEADER------------------------- */}
      <div className={styled.header}>

          {/* ------------------------Menu Hamburguesa------------------------- */}
        <div>
          <button onClick={() => dispatch(showNavbar())} className={styled.ham}>

            { navbarShow.status ? null :  <CiMenuBurger/>  }
              
            </button>
        </div>

          {/* ------------------------LOGO------------------------- */}
        <div> 
          <img src={logo} alt="logo" className={styled.img}/> 
        </div>


          {/* ------------------------CARRITO------------------------- */}
        <div className={styled.carrito}> <CiShoppingCart className={styled.carrito} /> </div>
      </div>

      
      
    {/* ------------------------FILTERS------------------------- */}
      <section className={styled.filters}>
        
        <div className={styled.filter}>
            <p>Genero</p>
            <select>
              <option>Hombre</option>
              <option>Mujer</option>
            </select>
        </div>

        <div className={styled.filter}>
            <p>Talla</p>
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
        </div>

        <div className={styled.filter}>
          <p>Prendas</p>
          <select>
            <option>Camisa</option>
            <option>Buso</option>
            <option>Gorro</option>
            <option>Camiseta</option>
          </select>
        </div>

      </section>

    {/* ------------------------CLOTHES------------------------- */}
      <section className={styled.clothes}>

          <div className={styled.prenda}>
              <img src={camisa} alt="camisa negra con" className={styled.clothesImg2}/>
              <div className={styled.info}>
                <p>Precio: 30.000 COP</p>
                <p>Camisa Negra</p>
              </div> 
          </div>


          <div className={styled.prenda}>
              <img src={camisa2} alt="camisa negra con" className={styled.clothesImg2}/>
              <div className={styled.info}>
                <p>Precio: 30.000 COP</p>
                <p>Camisa Negra-Amarillo</p>
              </div> 
          </div>


          <div className={styled.prenda}>
              <img src={camisa3} alt="camisa negra con" className={styled.clothesImg2}/>
              <div className={styled.info}>
                <p>Precio: 30.000 COP</p>
                <p>Camisa Azul</p>
              </div> 
          </div>


          <div className={styled.prenda}>
              <img src={camisa4} alt="camisa negra con" className={styled.clothesImg2}/>
              <div className={styled.info}>
                <p>Precio: 30.000 COP</p>
                <p>Camisa Blanca</p>
              </div> 
          </div>


          <div className={styled.prenda}>
              <img src={camisa5} alt="camisa negra con" className={styled.clothesImg2}/>
              <div className={styled.info}>
                <p>Precio: 30.000 COP</p>
                <p>Camisa Blanca-naranja</p>
              </div> 
          </div>
        
      </section>
      
      
    </div>
  )
}

export default Store;
