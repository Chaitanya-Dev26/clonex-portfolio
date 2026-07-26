import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import NavContext from "./components/context/NavContext";

const Home = lazy(() => import("./pages/Home"));
const Agence = lazy(() => import("./pages/Agence"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => {
  return (


    <div className="overflow-hidden">
    <NavContext>
      <div className="relative">
        <Navbar />
        <FullScreenNav />
        <Suspense fallback={<div className="h-screen w-screen bg-black"></div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/agence' element={<Agence />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Suspense>
      </div>
    </NavContext>
    </div>
  )
}

export default App