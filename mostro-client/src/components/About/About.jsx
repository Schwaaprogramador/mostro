import React from 'react';
import styled from './About.module.css';
// import Culture from '../../components/Culture/Culture';
// import { Link } from 'react-scroll';
import img from '../../assets/img/fondo.jpg';

function About() {
  return (
    <div className={styled.container}>
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
