//-----------IMPORTACIONES-------------------

        //-----------REACT-----------
        import React from 'react';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../../../redux/navbarSlice.js';
        import { useEffect } from 'react';
        import { Link } from 'react-router-dom';

        //-----------CSS----------
        import styled from './Blanca.module.css';

        //-----------IMAGENES----------
        import vistaFrente from '../../../../assets/Steez/Basic Elements/Fotos Camiseta Blanca/BlancaFrente.jpg';
        import vistaEspalda from '../../../../assets/Steez/Basic Elements/Fotos Camiseta Blanca/BlancaEspalda.jpg'
        import vistaInferior from '../../../../assets/Steez/Basic Elements/Fotos Camiseta Blanca/BlancaDetalleInferiorIzq.jpg'
        import vistaDetalle from '../../../../assets/Steez/Basic Elements/Fotos Camiseta Blanca/BlancaDetalleFrente.jpg'

        //-------COMPONENTES-----------
        import Header from '../../../Header/Header';
        import Navbar from '../../../Navbar/Navbar';



//---------------------------RENDER DEL COMPONENTE---------------------------
function Blanca() {

    const dispatch = useDispatch();
    const navbarShow = useSelector(state => state.navbarStatus);
    
    useEffect(()=>{

        dispatch(closeNavbar());
        
    },[dispatch]);




    //------------RENDER-------------//
  return (
    <div className={styled.container}>

            {/* ------------------------BARRA DE NAVEGACION------------------------- */}

            { navbarShow.status ? <Navbar/> : null }



            {/* -------------------HEADER--------------- */}
            <Header/>




            <div className={styled.product}>


                        {/* -------------INFO------------- */}
                        <div className={styled.info}>
                            
                                <div className={styled.infoContainer}>
                                    <div className={styled.infoTitulo}>Camiseta Basic Elements </div>
                                    <div className={styled.infoPrecio}>COP 75.000</div>
                                </div>  

                                <div className={styled.detalleContainer}>
                                    <div className={styled.datalleTitulo}>Detalles de la prenda</div>
                                    <p className={styled.datalle}>Elaborada en tela licra algodón
                                                                    color blanco, con estampado en
                                                                    alta densidad del mismo tono
                                                                    de la tela y el logo estampado en 
                                                                    plastisol plano color naranja.</p>
                                </div>
                        </div>




                    {/* --------------IMAGENES------------------------ */}
                    <div className={styled.imagenes}>
                        <img src={vistaFrente} alt="camisa-negra-mostro-clothes-black-tshirt" className={styled.img}/>
                        <img src={vistaEspalda} alt="camisa-negra-mostro-clothes-black-tshirt" className={styled.img}/>
                        <img src={vistaInferior} alt="camisa-negra-mostro-clothes-black-tshirt" className={styled.img}/>
                        <img src={vistaDetalle} alt="camisa-negra-mostro-clothes-black-tshirt" className={styled.img}/>

                    </div>





                    {/* ----------------------CARACTERISTICAS------------ */}
                        <div className={styled.caracteristicas}>

                            <div className={styled.colorContainer}>

                                    <div className={styled.caracter}>Elige el color</div>

                                    <div className={styled.colores}>

                                            <Link to="/negraamarillo">
                                                <div className={styled.colorNegro}></div>
                                            </Link>
                                            
                                            <Link to="/blanca">
                                            <div className={styled.colorBlanco}></div>
                                            </Link>

                                            <Link to="/azulrey">
                                            <div className={styled.colorAzul}></div>
                                            </Link>
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
                            <button className={styled.button}>AGREGAR A LA BOLSA</button>

                            </div>
                            

                        </div>



            </div>
      
    </div>
  )
}

export default Blanca;
