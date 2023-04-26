import React from 'react';
import styled from './Store.module.css';
import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { closeNavbar } from '../../redux/navbarSlice.js'; 
import camisa from '../../assets/fotos/camisanegraFront.jpg';
import camisa2 from '../../assets/fotos/camisanegraamarillaFront.jpg';
import camisa3 from '../../assets/fotos/camisaazulFront.jpg';
import camisa4 from '../../assets/fotos/camisablancaFront.jpg';
import camisa5 from '../../assets/fotos/camisablancanaranjaFront.jpg';
import { getProducts } from '../../redux/productFetch';
import Header from '../Header/Header';


function Store() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  const products = useSelector(state=> state.products);
  useEffect(()=>{
    dispatch(closeNavbar());
    dispatch(getProducts());
  },[dispatch]);


  console.log(products)
  

  return (
    <div className={styled.container}>

      {/* ------------------------BARRA DE NAVEGACION------------------------- */}

      { navbarShow.status ? <Navbar/> : null }



    {/* ------------------------HEADER------------------------- */}
      <Header/>

    




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
