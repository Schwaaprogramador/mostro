//-----------IMPORTACIONES--------
        //-----------REACT-----------
        import React from 'react';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../redux/navbarSlice.js';
        import { useEffect } from 'react';

        //----------------CSS--------------
        import styled from './Mostro.module.css';

        // //-----------IMAGENES----------
         import img from '../../assets/img/Lista.jpg';
        // import vistaEspalda from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraEspalda.jpg'
        // import vistaInferior from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraInferior.jpg'
        // import vistaDetalle from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraDetalle.jpg'

        //-------COMPONENTES-----------
        import Header from '../Header/Header';
        import Navbar from '../Navbar/Navbar';

//COMPONENTE----------
function Mostro() {


  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  
  useEffect(()=>{

      dispatch(closeNavbar());
      
  },[dispatch]);




  return (
    <div >
      {/* ------------------------BARRA DE NAVEGACION------------------------- */}

      { navbarShow.status ? <Navbar/> : null }

      {/* -------------------HEADER--------------- */}
      <Header/>
        
        <div className={styled.container}>
          <div className={styled.info}>
              <div>
                <img className={styled.imgContainer} src={img} alt='IMAGEN-MOSTRO'/>
              </div>
              <div className={styled.texto}>
                  <div>
                      <p className={styled.titulo}>MOSTRO</p>
                  </div>

                  <div>
                      <p className={styled.parrafo}> 
                          Hoy MXSTRO continua con su concepto de resaltar continuamente las cualidades 
                          de las personas en diferentes contextos,
                          destacamos eso que parece mínimo y simple como una cualidad superior y admirable. 
                      </p>
                      <p className={styled.parrafo}>
                          Transformación puede ser la palabra más contundente para explicar lo que viene sucediendo, 
                          visionamos crear más que una marca una identidad 
                          general para todos los MXSTROS que puedan surgir.
                      </p>
                      <p className={styled.parrafo}>
                          MXSTRO no deja de crear e imaginar poder expandir y resaltar 
                          las cualidades por medio de la comunicación no verbal, distinguirse 
                          por tener estilo hasta la muerte, será el lema de cajón.
                      </p>
                  </div>
              </div>
          </div>
        </div>
       
        

        
           
            
           
        

    </div>
  )
}

export default Mostro;
