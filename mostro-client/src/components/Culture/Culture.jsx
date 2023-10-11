
//-----------IMPORTACIONES--------
        //-----------REACT-----------
        import React from 'react';
        // import styled from './NegraRecuadro.module.css';
        import {useSelector, useDispatch  } from "react-redux";
        import { closeNavbar } from '../../redux/navbarSlice.js';
        import { useEffect } from 'react';

        //-----------CSS------------------------
        import styled from './Culture.module.css';

        // //-----------IMAGENES----------
         import img1 from '../../assets/img/gonzo.jpg';
         import img2 from '../../assets/img/abad.jpg';
        

        //-------COMPONENTES-----------
        import Header from '../Header/Header';
        import Navbar from '../Navbar/Navbar';


function Culture() {
  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);

  useEffect(()=>{

      dispatch(closeNavbar());
      
  },[dispatch]);


  return (
    <div className={styled.container}>
           {/* ------------------------BARRA DE NAVEGACION------------------------- */}

          { navbarShow.status ? <Navbar/> : null }



            {/* -------------------HEADER--------------- */}
            <Header/>

      <div className={styled.center}>

            <div className={styled.section}>
              <div>
                <img src={img1} alt="Fernando Gonzalez" className={styled.img}/>
              </div>
              <div >
                <p className={styled.parrafo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ea distinctio, officia provident laborum repudiandae 
                  cumque vero non placeat id culpa a nulla suscipit aut 
                  perspiciatis fugiat mollitia quasi. Consequuntur, est.
                </p>
              </div>
            </div>

            <div className={styled.section}>
              <div>
                <img src={img2} alt="Hector Abad" className={styled.img}/>
              </div>
              <div>
                <p className={styled.parrafo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ea distinctio, officia provident laborum repudiandae 
                  cumque vero non placeat id culpa a nulla suscipit aut 
                  perspiciatis fugiat mollitia quasi. Consequuntur, est.
                </p>
              </div>
            </div>
        
      </div>
      
    </div>
  )
}

export default Culture;
