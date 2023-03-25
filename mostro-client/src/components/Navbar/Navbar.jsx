import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';  
import logo from '../../assets/img/logo.svg';

function Navbar() {
  return (
    <>
            <nav className={styled.navbar}>

                  <button>
                  <img src={logo} alt="logo" className={styled.img}/>
                  </button>
                    
                
            
            
        
                    <p><Link to="/about" className={styled.link}>About</Link></p>
                    <p><Link to="/culture" className={styled.link}>Culture</Link></p>
                    <p><Link to="/store" className={styled.link}>Store</Link></p>
                    <p><Link to="/contact" className={styled.link}>Contact</Link></p>
               

                
            
            
            </nav>
    </>
  )
}

export default Navbar
