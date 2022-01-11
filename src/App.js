import React from "react";
import "./App.css";
import AboutAria from "./components/about/AboutAria";
import NavbarAria from "./components/header/NavbarAria";
import Services from "./components/services/Services";
import SubAbout from './components/about/SubAbout';
import SubSkills from './components/about/SubSkills';
import SubExprince from './components/about/SubExprince';

import { Routes, Route } from "react-router-dom";
import CounterUp from "./components/counterUp/CounterUp";
import Protfolio from "./components/protfolio/Protfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import useLocalStorage from 'use-local-storage';

const App = () => {
 const [theme,setTheme]=useLocalStorage('theme' ? 'dark' : 'light');
  const SwitchNewTheme=()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="app" data-theme={theme}>
    <div className="header-bg">
      <div className="bg-rgb">
      <NavbarAria clicks={SwitchNewTheme} />
      </div>
      </div>
      <AboutAria />
      <div className="about-com-wape container">
                <Routes>
                  <Route path="/" element={<SubAbout />} />
                  <Route path="/subSkills" element={<SubSkills />} />
                  <Route path="/subExprince" element={<SubExprince />} />
                </Routes>
              </div>
      <Services />
      <CounterUp />
      <Protfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
