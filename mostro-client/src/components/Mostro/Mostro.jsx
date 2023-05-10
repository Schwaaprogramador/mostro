//-----------IMPORTACIONES--------
        //-----------REACT-----------
        import React from 'react';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../redux/navbarSlice.js';
        import { useEffect } from 'react';

        //----------------CSS--------------
        import styled from './Mostro.module.css';

        // //-----------IMAGENES----------
        // import vistaFrente from '../../../../assets/Steez/Basic Elements/Fotos Negra Recuadro/NegraFrente.jpg';
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
          <h2>MOSTRO</h2>
        </div>
       
        

        
           
            
           
        

    </div>
  )
}

export default Mostro;
