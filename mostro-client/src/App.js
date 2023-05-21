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
import Blanca from "./components/Products/BasicElements/Blanca/Blanca";
import NegraAmarilla from "./components/Products/BasicElements/NegraAmarilla/NegraAmarilla";
import CalaveraBlanca from "./components/Products/Steez/CalaveraBlanca/CalaveraBlanca";
import CalaveraNegra from "./components/Products/Steez/CalaveraNegra/CalaveraNegra";



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
          <Route exact path="/blanca" element={<Blanca/>} />
          <Route exact path="/negraamarillo" element={<NegraAmarilla/>} />
          <Route exact path="/calaverablanca" element={<CalaveraBlanca/>} />
          <Route exact path="/calaveranegra" element={<CalaveraNegra/>} />





          
        </Routes>
      
    </div>
  );
}

export default App;
