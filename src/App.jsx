import React, { useRef } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {

  return (
   <div className="text-white"> 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agence' element={<Agence />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
   </div>
  )
}

export default App