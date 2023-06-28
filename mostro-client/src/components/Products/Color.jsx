import React from 'react'
//-----------CSS----------
import styled from './Color.module.css';
import { NavLink } from "react-router-dom"; //La diferencia entre NavLink y Link es basicamente de estilos.

function Color({id, nombre, color}) {

    if (color === 'negra'){
        return (
            <div>
                <NavLink to={`/productDetail/${id}/${color}/${nombre}`}>
        
                    <div className={styled.colorNegro}></div>
        
                </NavLink> 
              
            </div>
          )

    }
    if (color === 'blanca'){
        return (
            <div>
                <NavLink to={`/productDetail/${id}/${color}/${nombre}`}>
        
                    <div className={styled.colorBlanca}></div>
        
                </NavLink> 
              
            </div>
          )
    }
    if (color === 'azul')

  return (
    <div>
        <NavLink to={`/productDetail/${id}/${color}/${nombre}`}>

            <div className={styled.colorAzul}></div>

        </NavLink> 
      
    </div>
  )
}

export default Color
