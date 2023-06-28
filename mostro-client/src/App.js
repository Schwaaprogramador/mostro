//---COMPONENTES----
import Mostro from "./components/Mostro/Mostro";
import Culture from "./components/Culture/Culture";
import Galery from "./components/Galery/Galery";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import NewCollection from "./components/NewCollection/NewCollection";
import ProductDetail from "./components/Products/ProductDetail";

//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";



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
          <Route path="/productDetail/:id/:color/:nombre" element={<ProductDetail/>} />
          
          {/* ---------------- RUTAS ADMIN DE LA PAGINA --------------------- */}
            
         
        </Routes>
      
    </div>
  );
}

export default App;
