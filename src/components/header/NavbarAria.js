import React, { useState } from "react";
import "./navbarAria.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Typewriter } from "react-simple-typewriter";

const NavbarAria = ({clicks}) => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const changeBg2 = () => {
    if (window.scrollY >= 80) {
      setNavbar2(true);
    } else {
      setNavbar2(false);
    }
  };

  window.addEventListener("scroll", changeBg2);
  return (
    <section id="home">
        <div className={navbar2 ? "dark-mode " : "dark-mode tscale"}>
            <i onClick={clicks} className="fas fa-toggle-on"></i>
            
            </div>
      <div className={navbar ? "header actives" : "header"}>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <a href="#home">Md.Faisal</a>
            </div>
            <div className="nav-menu-icon" onClick={() => setClick(!click)}>
              {click ? (
                <CloseIcon className="close" />
              ) : (
                <MenuIcon className="close" />
              )}
            </div>
            <ul className={click ? "navbar-ul active" : "navbar-ul"}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-aria">About</a>
              </li>
              <li>
                <a href="#services-aria">Services</a>
              </li>
              <li>
                <a href="#protfolio-aria">Protfolio</a>
              </li>
              <li>
                <a href="#pricing-aria">Pricing</a>
              </li>
              <li>
                <a href="#contact-aria">Contact</a>
              </li>
            </ul>
            
          </nav>
        </div>
      </div>

      <section className="header-aria">
        <div className="container">
          <header className="hero">
            <div className="name-txt">
              <span className="say-hi">Hi There!</span>
              <h1 className="hero-name">
                I am Faisal Ahmad
                <br />
                <span className="run-text">
                  <Typewriter
                    words={[
                      "A Web Developer",
                      "A Web Designer",
                      " I Love Design",
                      " I Love Develope",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="hero-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="btn">
              <div className="btn-group">
                <a href="#" className="here">
                  HERE me
                  <span className="spans">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </a>
                <a href="#" className="port">
                  veiow Protfolio
                  <span className="spans">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="hero-links">
              <a href="#" className="fb">
                + Facebook
              </a>
              <a href="#" className="twiter">
                + Twiter
              </a>
              <a href="#" className="insta">
                + Instagram
              </a>
            </div>
          </header>
        </div>
      </section>
    </section>
  );
};

export default NavbarAria;
