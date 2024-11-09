import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../ThemeSwitcher/Home";
import About from "../ThemeSwitcher/About";
import Navbar from "../Navbar";

const RoutesComponent = () => {
  return(
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} /> 
        </Routes>
    </Router>
  );
};


export default RoutesComponent;