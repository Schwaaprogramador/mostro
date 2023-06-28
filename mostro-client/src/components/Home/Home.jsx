import React from 'react';
import styled from './Home.module.css';
import logo from '../../assets/img/logo.svg';
import Navbar from '../Navbar/Navbar';
  // import About from '../About/About';
  // import Culture from '../Culture/Culture';
  // import Store from '../Store/Store';
  // import Contact from '../Contact/Contact';
import { Animated } from "react-animated-css";
import { CiMenuBurger } from "react-icons/ci";
import {useSelector, useDispatch  } from "react-redux";
import { showNavbar } from '../../redux/navbarSlice.js';
// import LoginButton from '../Auth0/LoginButton';






function Home() {

//------Logica para navbar lateral--
// const [mostrar, setMostrar] = useState(false)//
  const navbarShow = useSelector(state => state.navbarStatus);
  const dispatch = useDispatch();
  
  

//--------------- Ejcutar un boton con un onClick para que lleve al top de la pagina-----
// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// };



  return (
    <div className={styled.container}>
               
          <div className={styled.home}>

                <Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true} animationInDuration = { 3000 }>
                    <div className={styled.buttonContainer}>
                      
                        <button onClick={() => dispatch(showNavbar())}  className={styled.button}>
                
                          <img src={logo} alt="logo" className={styled.img}/>
              
                        </button>
                    </div>
                </Animated>

                  {/* -----------------------BARRA DE NAVEGACION -------------------------------------- */}
                    { navbarShow.status ? <Navbar/> : null }
                    <button onClick={() => dispatch(showNavbar())} className={styled.ham}>

                        { navbarShow.status ? null :  <CiMenuBurger/>  }
                          
                    </button>
 
          </div>
      
    </div>
  )
}

export default Home;
