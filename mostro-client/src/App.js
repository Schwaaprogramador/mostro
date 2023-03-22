//---COMPONENTES----
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

            <Navbar/> 
            <Home/>
            
            
      
        <Routes>
          
          <Route exact path="/about" element={<About />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/store" element={<Store/>} />
          <Route exact path="/contact" element={<Contact/>} />
          
        </Routes>
      
    </div>
  );
}

export default App;
