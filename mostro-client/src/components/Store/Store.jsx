import React from 'react';
import styled from './Store.module.css';
import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js'; 
import logo from '../../assets/img/logonegro.svg';
import { CiMenuBurger } from "react-icons/ci";

function Store() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);

  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);
  

  return (
    <div className={styled.container}>
      { navbarShow.status ? <Navbar/> : null }
      <div className={styled.header}>
        <div>
          <button onClick={() => dispatch(showNavbar())} className={styled.ham}>

            { navbarShow.status ? null :  <CiMenuBurger/>  }
              
            </button>
        </div>

        <div> <img src={logo} alt="logo" className={styled.img}/> </div>
        <div> <p>Buscar</p></div>
      </div>

      
      

      <section>Filtros</section>

      
      <section>Ropa</section>
      
      
    </div>
  )
}

export default Store;
