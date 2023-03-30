//IMPORTS
import React from 'react';
import Navbar from '../Navbar/Navbar';
import styled from './About.module.css';
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js'; 
import { CgChevronRightR } from "react-icons/cg";

//COMPONENTE----------
function About() {
  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);

  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);




  return (
    <div className={styled.container}>

      { navbarShow.status ? <Navbar/> : null }
                        <button onClick={() => dispatch(showNavbar())} className={styled.ham}>

                            { navbarShow.status ? null : <CgChevronRightR className={styled.icon} /> }
                              
                        </button>
        
{/* 
        <div className={styled.left}>
        <img src={img} alt="medellin" className={styled.img}/>
            
        </div>

        <div className={styled.right}>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis eveniet adipisci,
             cumque ratione veniam alias dignissimos iste doloribus necessitatibus 
            molestias repellendus deserunt repudiandae libero nemo architecto, voluptatum id amet inventore.</p>
            
        </div> */}
        <div>
          <h2>ABOUT US</h2>
        </div>
        <div className={styled.text}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Explicabo amet alias dolorum. Rerum dolorem sapiente earum 
            fugiat, voluptates ab magni quod sint voluptate eaque nulla 
            sequi numquam quaerat quidem autem.</p>
        </div>
        

        
           
            
           
        

    </div>
  )
}

export default About
