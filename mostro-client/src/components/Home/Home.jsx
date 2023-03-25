import React, { useState } from 'react';
import styled from './Home.module.css';
import logo from '../../assets/img/logo.svg';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Culture from '../Culture/Culture';
import Store from '../Store/Store';
import Contact from '../Contact/Contact';

function Home() {

//------Logica para navbar lateral--
const [mostrar, setMostrar] = useState(false)
console.log(mostrar);


  return (
    <div className={styled.container}>

        { mostrar ? <Navbar  isOpen= {mostrar} onClose={() => setMostrar(false)} /> : null }


      <div className={styled.home}>

        <div className={styled.buttonContainer}>
          <button onClick={() => setMostrar(true)} className={styled.button}>
            <img src={logo} alt="logo" className={styled.img}/>
          </button>
        </div>
        
      </div>

      <div id='about'>
        <About/>
      </div>

      <div id='culture'>
        <Culture/>
      </div>

      <div id='store'>
        <Store/>
      </div>

      <div id='contact'>
        <Contact/>
      </div>
      
      
    </div>
  )
}

export default Home;
