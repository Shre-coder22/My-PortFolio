import { BrowserRouter } from "react-router-dom"
import { lazy } from "react";
import {  StarsCanvas } from './components';

const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))
const Experience = lazy(() => import("./components/Experience"))
const Hero = lazy(() => import("./components/Hero"))
const Navbar = lazy(() => import("./components/Navbar"))
const Tech = lazy(() => import("./components/Tech"))
const Works = lazy(() => import("./components/Works"))

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
