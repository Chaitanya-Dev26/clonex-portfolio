import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import NavContext from "./components/context/NavContext";

const App = () => {
  return (


    <div className="overflow-hidden">
    <NavContext>
      <div className="relative">
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </NavContext>
    </div>
  )
}

export default App