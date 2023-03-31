import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';  
// import { Link } from 'react-scroll';
import { ImCross } from 'react-icons/im';
import { BiHomeAlt2 } from 'react-icons/bi';
// import { CgProfile } from 'react-icons/cg';
import { closeNavbar } from '../../redux/navbarSlice.js';
import { useDispatch  } from "react-redux";
import Profile from '../Auth0/Profile';
import LogoutButton from '../Auth0/LogoutButton';


function Navbar() {
    
  const dispatch = useDispatch();
  
  return (
    <>
            <nav className={styled.navbar}>
                 
                 
                    <Profile/>
                    <LogoutButton/>

                
                    

                    <div className={styled.enlaces}>
                    
                      <Link to="/" smooth={true} className={styled.home}> <BiHomeAlt2/> </Link>
                      <Link to="/about" smooth={true} className={styled.link}> About </Link>
                      <Link to="/culture" smooth={true} className={styled.link}> Culture </Link>
                      <Link to="/store" smooth={true} className={styled.link}> Store </Link>
                      <Link to="/contact" smooth={true} className={styled.link}> Contact</Link>
                      
                      
                      

                    </div>

                    <div className={styled.closeIcon}>
                      
                        <button className={styled.button} onClick={()=> dispatch(closeNavbar())}>

                          <ImCross/>

                        </button>
                    </div>
                    


                 
                    

            </nav>
    </>
  )
}

export default Navbar
