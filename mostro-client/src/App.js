//---COMPONENTES----
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";

//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

            <Navbar/> 
            
            
            
      
        <Routes>
          
          <Route exact path="/about" element={<About />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/store" element={<Store/>} />
          
        </Routes>
      
    </div>
  );
}

export default App;
