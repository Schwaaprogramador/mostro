import React from 'react'
import styled from './Header.module.css';
import {useSelector, useDispatch  } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js';
import { openCart, closeCart } from '../../redux/cartSlice';
import logo from '../../assets/img/logonegro.svg';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Navbar/Navbar';

function Header() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  const cart = useSelector( state => state.cart);
  
  useEffect(()=>{
    dispatch(closeNavbar());
    dispatch(closeCart());
    
  },[dispatch]);


  //----------RENDER-----------------------
  return (
    <div>
        <div className={styled.header}>


                {/* ------------------------Menu Hamburguesa------------------------- */}
                <div>

                       { navbarShow.status ? <Navbar/> : null }

                      <button onClick={() => dispatch(showNavbar())} className={styled.ham}>
                      
                        { navbarShow.status ? null :  <CiMenuBurger/>  }
                                        
                      </button>


                </div>
                
                
            





                {/* ------------------------LOGO------------------------- */}
                <div> 
                <img src={logo} alt="logo" className={styled.img}/> 
                </div>




                {/* ------------------------CARRITO------------------------- */}


                  <div> 

                      {cart.status ? <Cart/> : null }
                      
                      
                        {cart.status ? null : 

                        <div className={styled.contadorContainer}>
                          
                          <button className={styled.button} onClick={() => dispatch(openCart())}>
                            <CiShoppingCart className={styled.carrito}/>
                          </button>

                          
                            
                            {cart.items.length===0 ? null : <div className={styled.contador}>{cart.items.length}</div>}
                            
                            
                            
                        </div>
                        
                        
                                                                
                        }
                      

                    </div>


        </div>

    </div>
  )
}

export default Header
