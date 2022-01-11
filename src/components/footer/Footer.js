import React from "react";
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  let fullYear= new Date().getFullYear();
  return (
    <>
      <footer className="footer p">
        <div className="container">
          <div className="footer-wapper">
            <div className="footer-box">
              <h2>Md.Faisal</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="ftr-lnks">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-box">
              <h2>Services</h2>
              <ul className="ftr-ul">
                <li>
                  <a href="#">
                    <i className="fas fa-long-arrow-alt-right"></i> Web Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-long-arrow-alt-right"></i> Web
                    Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-long-arrow-alt-right"></i> Graphic
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-long-arrow-alt-right"></i> UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h2>Have a Questions?</h2>
              <div className="ftr-last">
                <span>
                  <i class="fas fa-map"></i>
                </span>
                <p>
                  
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="ftr-last">
                <span>
                <i className="fas fa-phone"></i>
                </span>
                <a
                  href="tel://	+2 392 3929 210
"
                >
                  
                  +2 392 3929 210
                </a>
              </div>
              <div className="ftr-last">
                <span>
                <i className="fas fa-location-arrow"></i>
                </span>
                <a href="mailto:	info@yourdomain.com"> info@yourdomain.com</a>
              </div>
            </div>
          </div>
         
      <ScrollToTop color="#0779e4" smooth />
      
    
        </div>
      </footer>
      <section className="copy-aria">
        <div className="container">
          <div className="copy">
            <p>Copyright © {fullYear} All rights reserved | This template is made with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="#" title="Md.Faisal">Me</a> </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
