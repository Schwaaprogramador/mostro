import React from 'react'
import styled from './CartItem.module.css';

function CartItem({img, nombre , precio}) {
  return (
    <div className={styled.container}>

        <div>
            <img src={img} alt={nombre} className={styled.img}/>
        </div>

        

        <div className={styled.info}>
            <p className={styled.nombre}>{nombre}</p>
            <p className={styled.nombre}>{precio}</p>
        </div>

        <div>
            <button className={styled.button}>x</button>
        </div>
      
    </div>
  )
}

export default CartItem
