import React from 'react'
import styled from './Header.module.css';
import {useSelector, useDispatch  } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js'; 
import logo from '../../assets/img/logonegro.svg';
import { useEffect } from 'react';

function Header() {

    const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  
  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);


  //----------RENDER-----------------------
  return (
    <div>
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
    </div>
  )
}

export default Header
