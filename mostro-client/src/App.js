//---COMPONENTES----
import Mostro from "./components/Mostro/Mostro";
import Culture from "./components/Culture/Culture";
import Galery from "./components/Galery/Galery";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import NewCollection from "./components/NewCollection/NewCollection";

//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";

//------CAMISAS-----------
import NegraRecuadro from "./components/Products/BasicElements/NegraRecuadro/NegraRecuadro";
import AzulRey from "./components/Products/BasicElements/AzulRey/AzulRey";



//---------RENDER DEL COMPONENTE----------------------
function App() {
  return (
    <div className="App">
            
        <Routes>

          {/* ----------------RUTAS NAVEGACION DE LA PAGINA--------------------- */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store" element={<Store/>} />
          <Route exact path="/mostro" element={<Mostro />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/newcollection" element={<NewCollection />} />
          <Route exact path="/galery" element={<Galery />} />
          
          {/* ---------------- RUTAS ADMIN DE LA PAGINA --------------------- */}
          <Route exact path="/contact" element={<Contact/>} />


          {/* ----------------RUTAS VISTAS CAMISAS--------------------- */}
          <Route exact path="/negrarecuadro" element={<NegraRecuadro/>} />
          <Route exact path="/azulrey" element={<AzulRey/>} />




          
        </Routes>
      
    </div>
  );
}

export default App;
