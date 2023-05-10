//-----------IMPORTACIONES--------
        //-----------REACT-----------
        import React from 'react';
        // import styled from './NegraRecuadro.module.css';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../redux/navbarSlice.js';
        import { useEffect } from 'react';

        // //-----------IMAGENES----------
        // import vistaFrente from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraFrente.jpg';
        // import vistaEspalda from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraEspalda.jpg'
        // import vistaInferior from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraInferior.jpg'
        // import vistaDetalle from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraDetalle.jpg'

        //-------COMPONENTES-----------
        import Header from '../Header/Header';
        import Navbar from '../Navbar/Navbar';


function Galery() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  
  useEffect(()=>{

      dispatch(closeNavbar());
      
  },[dispatch]);
  return (
    <div>
         {/* ------------------------BARRA DE NAVEGACION------------------------- */}

         { navbarShow.status ? <Navbar/> : null }



          {/* -------------------HEADER--------------- */}
          <Header/>
      <h2>GALERY</h2>
    </div>
  )
}

export default Galery
