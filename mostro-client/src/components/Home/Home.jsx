import React from 'react';
import styled from './Home.module.css';
import logo from '../../assets/img/logo.svg';

function Home() {
  return (
    <div className={styled.container}>
      <img src={logo} alt="logo" className={styled.img}/>
    </div>
  )
}

export default Home;
