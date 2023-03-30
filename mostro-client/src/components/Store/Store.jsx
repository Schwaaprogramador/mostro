import React from 'react';
import styled from './Store.module.css';
import Navbar from '../Navbar/Navbar';  
import {useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { showNavbar, closeNavbar } from '../../redux/navbarSlice.js'; 
import { CgChevronRightR } from "react-icons/cg"; 

function Store() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);

  useEffect(()=>{
    dispatch(closeNavbar());
    
  },[dispatch]);


  return (
    <div className={styled.container}>

      <div>
      { navbarShow.status ? <Navbar/> : null }
        <button onClick={() => dispatch(showNavbar())} className={styled.ham}>

          { navbarShow.status ? null : <CgChevronRightR className={styled.icon} /> }
                              
        </button>

      </div>
      
      

      <div className={styled.center}>
      
       

        <div className={styled.img}>
          <div className={styled.imgInfo}>

            <h3>Camisa Chimbera</h3>
                <div>
                  <p>Talla: La que le sirve</p>
                  <p>Precio: cuanto tiene</p>
                </div>
            
          </div>
        </div>

        <div className={styled.img2ejemplo}>

          <div className={styled.img2}>
            
          </div>
          <div className={styled.text}>
              <h3>Camisa Chimbera</h3>
                <div>
                  <p>Talla: La que le sirve</p>
                  <p>Precio: cuanto tiene</p>
                </div>  

          </div>
        </div>
   
        


      </div>
      
      



      
    </div>
  )
}

export default Store;
