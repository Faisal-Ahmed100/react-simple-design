import React from 'react';
import './pricing.css';

const Pricing = () => {
    return (
        <>
         <section className="pricing-aria p" id='pricing-aria'>
             <div className="container">
             <div className="s-text">
            <h6>MY PRICING</h6>
            <h2 className="s-text-h2">Pricing & Packages</h2>
          </div>
          <div className="pricing-wapper">
              <div className="pricing-box">
                  <h2>BASIC PLAN</h2>
                  <div className="sup-price">
                      <sup>$</sup>
                      49K
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="pricing-btn">
                      <a href="#">Get Started</a>
                  </div>
              </div>
              <div className="pricing-box">
                  <h2>BEGINNER PLAN</h2>
                  <div className="sup-price">
                      <sup>$</sup>
                      79K
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="pricing-btn">
                      <a href="#">Get Started</a>
                  </div>
              </div>
              <div className="pricing-box">
                  <h2>PREMIUM PLAN</h2>
                  <div className="sup-price">
                      <sup>$</sup>
                      109K
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="pricing-btn">
                      <a href="#">Get Started</a>
                  </div>
              </div>
          </div>
             </div>
             </section>   
        </>
    )
}

export default Pricing
