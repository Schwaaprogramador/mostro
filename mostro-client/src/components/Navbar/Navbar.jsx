import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';   

function Navbar() {
  return (
    <>
            <nav className={styled.navbar}>

                {/* <div>
                <img src={Logo} alt="logo" className={styled.img}/>
                </div> */}
            
            
        
                    <p><Link to="/about" className={styled.link}>About</Link></p>
                    <p><Link to="/culture" className={styled.link}>Culture</Link></p>
                    <p><Link to="/store" className={styled.link}>Store</Link></p>
                    <p><Link to="/contact" className={styled.link}>Contact</Link></p>
               

                
            
            
            </nav>
    </>
  )
}

export default Navbar
