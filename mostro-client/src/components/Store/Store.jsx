import React from 'react';
import styled from './Store.module.css';
import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { closeNavbar } from '../../redux/navbarSlice.js'; 
//------------------CAMISAS-------------------
import camisaNegraCuadro from '../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraFrente.jpg';
import camisaAzulRey from '../../assets/Steez/Basic Elements/Fotos Azul Rey/AzulFrente.jpg';
import camisaBlanca from '../../assets/Steez/Basic Elements/Fotos Camiseta Blanca/BlancaFrente.jpg';
import camisaNegra from '../../assets/Steez/Basic Elements/Fotos Negra logo amarillo/NegraFrente.jpg';

// --------REDUX---------------
import { getProducts } from '../../redux/productFetch';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


function Store() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  const products = useSelector(state=> state.products);
  useEffect(()=>{
    dispatch(closeNavbar());
    dispatch(getProducts());
  },[dispatch]);


  console.log(products)
  
//------------RENDER-------------
  return (
    <div className={styled.container}>

      {/* ------------------------BARRA DE NAVEGACION------------------------- */}

      { navbarShow.status ? <Navbar/> : null }


      {/* ------------------------HEADER------------------------- */}
          <Header/>


      {/* ------------------------CLOTHES------------------------- */}
              <section className={styled.clothes}>

                {/* CAMISA NEGRA */}

                  <div className={styled.prenda}>
                    <Link to="/negrarecuadro">
                          <img src={camisaNegraCuadro} alt="camisa negra cuadro" className={styled.clothesImg2}/>
                          </Link>  
                          <div className={styled.info}>
                            <p className={styled.infoPrecio}> COP 75.000</p>
                            <p className={styled.infoNombre}> BASIC ELEMENTS PLACA</p>
                          </div>
                          
                  </div>

                  {/* CAMISA AZUL */}
                  <div className={styled.prenda}>
                      <Link to="/azulrey">
                        <img src={camisaAzulRey} alt="camisa azul rey" className={styled.clothesImg2}/>
                        </Link>  
                        <div className={styled.info}>
                          <p className={styled.infoPrecio}>COP 75.000 </p>
                          <p className={styled.infoNombre}>BASIC ELEMENTS</p>
                        </div>
                      
                  </div>

                  {/* CAMISA BLANCA */}
                  <div className={styled.prenda}>
                      <Link to="/blanca">
                        <img src={camisaBlanca} alt="CAMISETA BLANCA" className={styled.clothesImg2}/>
                        </Link>  
                        <div className={styled.info}>
                          <p className={styled.infoPrecio}>COP 75.000 </p>
                          <p className={styled.infoNombre}>BASIC ELEMENTS</p>
                        </div>
                      
                  </div>

                  
                  {/* CAMISA NEGRA AMARILLA */}
                  <div className={styled.prenda}>
                      <Link to="/negraamarillo">
                        <img src={camisaNegra} alt="CAMISETA NEGRA" className={styled.clothesImg2}/>
                        </Link>  
                        <div className={styled.info}>
                          <p className={styled.infoPrecio}>COP 75.000 </p>
                          <p className={styled.infoNombre}>BASIC ELEMENTS</p>
                        </div>
                      
                  </div>


                  <div className={styled.prenda}>
                      <img src={camisaAzulRey} alt="camisa negra con" className={styled.clothesImg2}/>
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
