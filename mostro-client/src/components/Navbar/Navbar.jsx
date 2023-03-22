import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';   

function Navbar() {
  return (
    <div>
            <nav className={styled.navbar}>

                {/* <div>
                <img src={Logo} alt="logo" className={styled.img}/>
                </div> */}
            
                <div className={styled.links}>
        
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/culture">Culture</Link></p>
                    <p><Link to="/store">Store</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
               

                </div>
            
            
            </nav>
    </div>
  )
}

export default Navbar
