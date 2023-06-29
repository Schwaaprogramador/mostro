import React, { useEffect } from 'react';
import styled from './Cart.module.css';
import {useSelector, useDispatch  } from "react-redux";
import { IoClose  } from 'react-icons/io5';
import { closeCart } from '../../redux/cartSlice';
import { closeNavbar } from '../../redux/navbarSlice';
import CartItem from './CartItem';


function Cart() {

  const dispatch = useDispatch();
  const cart = useSelector( state => state.cart );
  

  useEffect(()=>{
    dispatch(closeNavbar());
  },[dispatch]);


  return (
    <div className={styled.container}>


                  <p className={styled.titulo}>BOLSITA</p>


                  {/* -----------------BOTTON DE CIERRE------------------ */}

                  <div className={styled.closeIcon}>
                      
                      <button className={styled.button} onClick={()=> dispatch(closeCart())}>

                        <IoClose/>

                      </button>

                  </div>






                   {/* -----------------ITEMs---------------------------
                    Si no hay items en el carrito , mostrar un mensaje para agregar al carrito
                    ------------------ */}

                   <div>

                      { cart.items.length > 0 ? 

                      cart.items.map( item => <CartItem   img={item.imagenes[0]}
                                                          nombre={item.nombre} 
                                                          precio={item.precio} 
                                                          cantidad={item.cantidad}
                                                          id={item.id}/>)

                      : <p className={styled.titulo}>Agrega Productos</p>

                      }
                      

                  </div>



                  {/* -----------------TOTAL------------------ */}

                  <div className={styled.total}>
                      <p>TOTAL</p>
                  </div>





                  {/* -----------------FOOTER------------------ */}

                  <div className={styled.footer}>
                      <p>2023 Mostro Clothing</p>
                  </div>
    </div>
  )
}

export default Cart
