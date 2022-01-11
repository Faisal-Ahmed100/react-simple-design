import React from "react";
import "./service.css";

const Services = () => {
  return (
    <>
      <section className="service-aria p" id="services-aria">
        <div className="container">
          <div className="s-text">
            <h6>SERVICES</h6>
            <h2 className="s-text-h2">
              This is My Expertise, The Services I'll Provide My Clients
            </h2>
          </div>
          {/* services */}

          <div className="s-wapper">
            <div className="s-box">
            <div className="s-icon-w">
                <div className="s-box-icon">
                  <i className="fab fa-uikit"></i>
                </div>
              </div>
              <h2 className="s-box-texts">UI & UX Design</h2>
              <p className="s-box-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <a href="#" className="s-box-btn">
                Read more <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
            <div className="s-box">
              <div className="s-icon-w">
                <div className="s-box-icon">
                  <i className="fab fa-uikit"></i>
                </div>
              </div>
              <h2 className="s-box-texts">UI & UX Design</h2>
              <p className="s-box-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <a href="#" className="s-box-btn">
                Read more <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
            <div className="s-box">
            <div className="s-icon-w">
                <div className="s-box-icon">
                  <i className="fab fa-uikit"></i>
                </div>
              </div>
              <h2 className="s-box-texts">UI & UX Design</h2>
              <p className="s-box-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <a href="#" className="s-box-btn">
                Read more <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
