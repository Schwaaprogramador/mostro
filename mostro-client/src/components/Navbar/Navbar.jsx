import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';  
import logo from '../../assets/img/logo.svg';
// import { Link } from 'react-scroll';
import { ImCross } from 'react-icons/im';
import { BiHomeAlt2 } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function Navbar({ isOpen, onClose}) {


  return (
    <>
            <nav className={styled.navbar} style={{display: isOpen ? 'flex' : null}}>
                 
                    

                    <div className={styled.enlaces}>
                    
                      <Link to="/" smooth={true} className={styled.link}> <BiHomeAlt2/> </Link>
                      <Link to="about" smooth={true} className={styled.link}> About </Link>
                      <Link to="culture" smooth={true} className={styled.link}> Culture </Link>
                      <Link to="store" smooth={true} className={styled.link}> Store </Link>
                      <Link to="contact" smooth={true} className={styled.link}> Contact</Link>
                      <Link to="contact" smooth={true} className={styled.link}> My Profile <CgProfile padding='5px'/></Link>
                      
                      

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
