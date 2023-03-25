import React from 'react';
import styled from './About.module.css';
import Culture from '../../components/Culture/Culture';
import { Link } from 'react-scroll';

function About() {
  return (
    <div>
        <div className={styled.container}>
            <p><Link to="section2">Ir a Cultura</Link></p>
            <h3>About</h3>
        </div>
     

        
           
            
            <div id="section2" className={styled.container2}>
                <Culture/>
            </div>
        

    </div>
  )
}

export default About
