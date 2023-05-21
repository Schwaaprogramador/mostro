//-----------IMPORTACIONES--------
        //-----------REACT-----------
        import React from 'react';
        import styled from './CalaveraNegra.module.css';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../../../redux/navbarSlice.js';
        import { useEffect } from 'react';
        import { Link } from 'react-router-dom';

        //-----------IMAGENES----------
        import vistaFrente from '../../../../assets/Steez/Steez Til Def/Calavera Camiseta Negra/NegraFrente.jpg';
        import vistaEspalda from '../../../../assets/Steez/Steez Til Def/Calavera Camiseta Negra/NegraEspalda.jpg';
        import vistaInferior from '../../../../assets/Steez/Steez Til Def/Calavera Camiseta Negra/NegroDetalleFrente.jpg';
        import vistaDetalle from '../../../../assets/Steez/Steez Til Def/Calavera Camiseta Negra/NegraDetalleFrente2.jpg';

        //-------COMPONENTES------------
        import Header from '../../../Header/Header';
        import Navbar from '../../../Navbar/Navbar';


function CalaveraNegra() {

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
                                    <div className={styled.infoPrecio}>COP 65.000</div>
                                </div>

                                <div className={styled.detalleContainer}>
                                    <div className={styled.datalleTitulo}>Detalles de la prenda</div>
                                    <p className={styled.datalle}>Elaborada en tela licra algodón
                                                                    color blanco, con estampado en
                                                                    alta densidad en el frente y 
                                                                    estampado textil en la parte
                                                                    de atrás color verde antioquia</p>
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
                                    <Link to="/calaverablanca">
                                    <div className={styled.colorNegro}></div>
                                    </Link>


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

export default CalaveraNegra;
