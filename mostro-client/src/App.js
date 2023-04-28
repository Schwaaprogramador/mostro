//---COMPONENTES----
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
//import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";

//------CAMISAS-----------
import NegraRecuadro from "./components/Products/BasicElements/NegraRecuadro/NegraRecuadro";


function App() {
  return (
    <div className="App">
            
        <Routes>

          {/* ----------------RUTAS NAVEGACION DE LA PAGINA--------------------- */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/store" element={<Store/>} />
          <Route exact path="/contact" element={<Contact/>} />


          {/* ----------------RUTAS VISTAS CAMISAS--------------------- */}
          <Route exact path="/negrarecuadro" element={<NegraRecuadro/>} />




          
        </Routes>
      
    </div>
  );
}

export default App;
