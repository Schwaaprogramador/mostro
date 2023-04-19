import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';  
// import { Link } from 'react-scroll';
import { IoClose } from 'react-icons/io5';
import { closeNavbar } from '../../redux/navbarSlice.js';
import { useDispatch  } from "react-redux";


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
                 
                    

                    <div className={styled.enlaces}>

                      <Link to="/store" className={styled.link}> TIENDA </Link>
                      <Link to="/store" className={styled.link}> NUEVA COLECCION </Link>
                      <Link to="/about" className={styled.link}> CULTURA </Link>
                      <Link to="/store" className={styled.link}> GALERIA </Link>
                      <Link to="/contact"  className={styled.link}> MOSTRO </Link>


                    </div>
   
                      

                    


            </nav>
    </>
  )
}

export default Navbar
