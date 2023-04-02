import React from 'react';
import styled from './Store.module.css';
import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js'; 
import logo from '../../assets/img/logo.svg';

function Store() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);

  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);
  

  return (
    <div className={styled.container}>
      <div>
      <header className={styled.header}>
        <div>{ navbarShow.status ? <Navbar/> : null }</div>
        <div><img src={logo} alt="logo" className={styled.img}/></div>
        <div></div>
      </header>

      </div>
      
<div>
<section>Filtros</section>
</div>
      
      <section>Ropa</section>
      
      
    </div>
  )
}

export default Store;
