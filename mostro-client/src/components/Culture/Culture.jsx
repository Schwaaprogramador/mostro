import React from 'react';
import styled from './Culture.module.css';
import img from '../../assets/img/imagen2.jpg';
import img2 from '../../assets/img/imagen3.jpg';

function Culture() {
  return (
    <div className={styled.container}>

      <div className={styled.center}>
            <h2>Culture</h2>
            <img src={img} alt="medellin" className={styled.img}/>
            <img src={img2} alt="medellin" className={styled.img}/>
      </div>
      
    </div>
  )
}

export default Culture
