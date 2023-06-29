//-----------IMPORTACIONES-------------------

        //-----------REACT-----------
        import React from 'react';
        import { useParams } from "react-router-dom";
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../redux/navbarSlice.js';
        import { getDetail } from '../../redux/productSlice.js';
        import { useEffect } from 'react';
        
        //-----------CSS----------
        import styled from './ProductDetail.module.css';

        //-------COMPONENTES-----------
        import Header from '../Header/Header.jsx';
        import Color from './Color.jsx';
        import { addCart } from '../../redux/cartSlice.js';


function ProductDetail() {
  
  const params = useParams(); //por aca llega el nombre y el color de la camisa que se renderiza.
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.products.productDetail); // El estado que se esta renderizando.
  const colores = useSelector(state => state.products.colores); // Array de las camisas con el mismo nombre, diferente color.
  
    useEffect(()=>{
      
        dispatch(getDetail(params))
        dispatch(closeNavbar());
        
    },[dispatch, params])

    const addToBolsita = () => { 
      dispatch(addCart(productDetail[0]))
      
    }

    
    
  return (
    <div className={styled.container}>



            {/* -------------------HEADER--------------- */}
            <Header/>



            {productDetail.length > 0 ? 

            <div className={styled.product}>

                        {/* -------------INFO------------- */}
                        <div className={styled.info}>         
                          <div className={styled.infoContainer}>
                              <div className={styled.infoTitulo}>{productDetail[0].nombre} </div>
                              <div className={styled.infoPrecio}>{productDetail[0].precio}</div>
                          </div>  

                          <div className={styled.detalleContainer}>
                              <div className={styled.datalleTitulo}>Detalles de la prenda</div>
                              <p className={styled.datalle}>{productDetail[0].description}</p>
                          </div>
                        </div>




                    {/* --------------IMAGENES------------------------ */}
                    <div className={styled.imagenes}> 

                      {productDetail[0].imagenes.map( img => <img src={img} alt={productDetail[0].name} className={styled.img} /> )}

                    </div>


                    {/* ----------------------CARACTERISTICAS------------ */}
                        <div className={styled.caracteristicas}>

                          <div className={styled.colorContainer}>

                              <div className={styled.caracter}>Elige el color</div>

                              <div className={styled.colores}>                                                         
                                      {colores.map( color => <Color color={color.color} nombre={color.nombre} id={color.id}/> )}
                              </div>
                              


                          </div>
                            
                            <div className={styled.tallasContainer}>
                                    <div className={styled.caracter}>Elige talla</div>

                                    <div className={styled.tallas}>
                                        <div className={styled.talla}>M</div>
                                        <div className={styled.talla}>L</div>
                                        <div className={styled.talla}>XL</div>
                                        <div className={styled.talla}>XXL</div>
                                    </div>

                            </div>
                            
                            <div className={styled.buttonContainer}>
                              
                            <button onClick={addToBolsita} className={styled.button}>AGREGAR A LA BOLSA</button>

                            </div>
                            

                        </div>



            </div>

            : <h1>Loading..</h1> 
            }
    </div>
  )
}

export default ProductDetail
