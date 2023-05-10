//-----------IMPORTACIONES--------
        //-----------REACT-----------
        import React from 'react';
        import styled from './NegraRecuadro.module.css';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../../../redux/navbarSlice.js';
        import { useEffect } from 'react';

        //-----------IMAGENES----------
        import vistaFrente from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraFrente.jpg';
        import vistaEspalda from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraEspalda.jpg'
        import vistaInferior from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraInferior.jpg'
        import vistaDetalle from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraDetalle.jpg'

        //-------COMPONENTES-----------
        import Header from '../../../Header/Header';
        import Navbar from '../../../Navbar/Navbar';


function NegraRecuadro() {

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
                                    <div className={styled.infoTitulo}>Camiseta Basic Elements Placa</div>
                                    <div className={styled.infoPrecio}>COP 75.000</div>
                                </div>

                                <div className={styled.detalleContainer}>
                                    <div className={styled.datalleTitulo}>Detalles de la prenda</div>
                                    <p className={styled.datalle}>Elaborada en tela licra algodón
                                        color negro, con aplique en 
                                        papel foil color tornasol.</p>
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
                                    <div className={styled.colorNegro}></div>


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

export default NegraRecuadro;
