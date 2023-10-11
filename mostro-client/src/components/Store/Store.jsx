import React from 'react';
import styled from './Store.module.css';
// import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { closeNavbar } from '../../redux/navbarSlice.js'; 

// --------REDUX---------------

import Header from '../Header/Header';
// import { Link } from 'react-router-dom';
import Product from '../Products/Product';


function Store() {

  const dispatch = useDispatch();
 // const navbarShow = useSelector(state => state.navbarStatus);
  const products = useSelector(state => state.products);
  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);


  
  
//------------RENDER-------------
  return (
    <div className={styled.container}>

      {/* ------------------------BARRA DE NAVEGACION------------------------- */}

      {/* { navbarShow.status ? <Navbar/> : null } */}


      {/* ------------------------HEADER------------------------- */}
          <Header/>


      {/* ------------------------CLOTHES------------------------- */}
              <section className={styled.clothes}>

                {products.products.map( product => <Product 
                                                      key={product.id}
                                                      id={product.id}
                                                      nombre={product.nombre}
                                                      precio={product.precio}
                                                      description={product.description}
                                                      color={product.color}
                                                      talla={product.talla}
                                                      imagenes={product.imagenes}/>)}
                
              </section>
      
      
    </div>
  )
}

export default Store;
