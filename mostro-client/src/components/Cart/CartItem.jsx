import React from 'react'
import styled from './CartItem.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { addCart, deleteCart, restarCantidad } from '../../redux/cartSlice.js';
import {useDispatch  } from "react-redux"; 


function CartItem({id, img, nombre , precio, cantidad}) {
  

  const dispatch = useDispatch();

  const addToBolsita = () => { 
    dispatch(addCart({id, img, nombre , precio, cantidad}))
    
  }

  const restar = ()=>{
    dispatch(restarCantidad({id}))
  }

  const deleteFromBolsita = () => { 
    dispatch(deleteCart({id}))
    
  }
  

  return (

    <div className={styled.container}>

        <div>
            <img src={img} alt={nombre} className={styled.img}/>
        </div>

        

        <div className={styled.info}>

            <p className={styled.nombre}>{nombre}</p>
            <p className={styled.nombre}>{precio}</p>

            <div className={styled.cantidad}>
              <button onClick={restar} className={styled.button}>-</button>
              <p className={styled.nombre}>{cantidad}</p>
              <button onClick={addToBolsita} className={styled.buttonMas}>+</button>
            </div>
            
            
              
            
        </div>

        <button onClick={deleteFromBolsita} className={styled.button}><IoCloseCircleOutline/></button>
      
    </div>
  )
}

export default CartItem
