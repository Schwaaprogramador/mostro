import React from 'react'
// import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';  
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-scroll';
import { ImCross } from 'react-icons/im';

function Navbar({ isOpen, onClose}) {


  return (
    <>
            <nav className={styled.navbar} style={{display: isOpen ? 'flex' : null}}>
                 
                    

                    <div className={styled.enlaces}>
                      <p><Link to="about" smooth={true} className={styled.link}> About</Link></p>
                      <p><Link to="culture" smooth={true} className={styled.link}> Culture</Link></p>
                      <p><Link to="store" smooth={true} className={styled.link}> Store</Link></p>
                      <p><Link to="contact" smooth={true} className={styled.link}> Contact</Link></p>

                    </div>

                    <div className={styled.closeIcon}>
                      
                        <button className={styled.button} onClick={onClose}>

                          <ImCross/>

                        </button>
                    </div>
                    


                 
                    

            </nav>
    </>
  )
}

export default Navbar
