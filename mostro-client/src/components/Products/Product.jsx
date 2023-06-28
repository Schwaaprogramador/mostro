import React from 'react'
import styled from './Product.module.css'
import { NavLink } from "react-router-dom"; //La diferencia entre NavLink y Link es basicamente de estilos.
// 
function Product({id, nombre , precio, description, color, talla, imagenes}) {
  
  return (
    <div className={styled.container}>

        <div className={styled.prenda}>

                          <NavLink to={`/productDetail/${id}/${color}/${nombre}`}>

                            <img src={imagenes[0]} alt="camisa negra cuadro" className={styled.clothesImg2}/>
                            
                            </NavLink>  
                            <div className={styled.info}>
                              <p className={styled.infoPrecio}> {precio} </p>
                              <p className={styled.infoNombre}> {nombre}</p>
                            </div>

                                       
          </div>
      
    </div>
  )
}

export default Product
