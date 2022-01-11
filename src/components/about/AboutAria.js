import React from "react";
import SubAbout from "./SubAbout";
import SubExprince from "./SubExprince";
import SubSkills from "./SubSkills";
import "./about.css";
import { Routes, NavLink, Route } from "react-router-dom";

const AboutAria = () => {
  return (
    <>
      <section className="about-aria p" id="about-aria">
        <div className="container">
          <div className="about-wapper">
            {/* about left */}
            <div className="about-left about-box">
              <div className="about-left-img"></div>
            </div>

            {/* about right */}
            <div className="about-right about-box">
              <div className="about-right-btns">
                <NavLink to="/" className="about-btn">
                  About Me
                </NavLink>
                <NavLink to="/subSkills" className="skil-btn">
                  Skills
                </NavLink>
                <NavLink to="/subExprince" className="expri-btn">
                  Experience
                </NavLink>
              </div>

              <div className="about-com-wape1">
                <Routes>
                  <Route path="/" element={<SubAbout />} />
                  <Route path="/subSkills" element={<SubSkills />} />
                  <Route path="/subExprince" element={<SubExprince />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAria;
