import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';  
// import { Link } from 'react-scroll';
import { IoClose } from 'react-icons/io5';
import { closeNavbar } from '../../redux/navbarSlice.js';
import { useDispatch  } from "react-redux";
import Profile from '../Auth0/Profile';


function Navbar() {
    
  const dispatch = useDispatch();
  
  return (
    <>
            <nav className={styled.navbar}>

                  <div className={styled.closeIcon}>
                      
                      <button className={styled.button} onClick={()=> dispatch(closeNavbar())}>

                        <IoClose/>

                      </button>
                  </div>
                 
                    <Profile/>

                    
   
                      <Link to="/store" className={styled.link}> Tienda </Link>
                      <Link to="/about" className={styled.link}> Mostro </Link>
                      <Link to="/store" className={styled.link}> Cultura </Link>
                      <Link to="/contact"  className={styled.link}> Registros </Link>

                    


            </nav>
    </>
  )
}

export default Navbar
