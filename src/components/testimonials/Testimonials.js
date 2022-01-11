import React from 'react';
import Carousel from 'react-elastic-carousel';
import './testimonial.css';

const Testimonials = () => {
  return (
    <div className='test-bg'>
     <section className="testimonial p">
       <div className="container">
       <div className="s-text">
            <h6>TESTIMONIAL</h6>
            <h2 className="s-text-h2">My Setisfy Clints</h2>
          </div>
         <div className="test-wap">
         <Carousel enableAutoPlay autoPlaySpeed={3000}>
  <div className='t-box'>
    <div className="testi-left">
    <div className='t-img'>
    <span className='tes-span'><i className="fas fa-quote-left"></i></span>
    </div>
    <div className="testi-right">
      <h2 className='roger'>ROGER SCOTT</h2>
      <h4 className='marketer'>MARKETING MANAGER</h4>
    </div>
    </div>
    
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  <div className='t-box'>
    <div className="testi-left">
    <div className='t-img'>
    <span className='tes-span'><i className="fas fa-quote-left"></i></span>
    </div>
    <div className="testi-right">
      <h2 className='roger'>ROGER SCOTT</h2>
      <h4 className='marketer'>MARKETING MANAGER</h4>
    </div>
    </div>
    
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  <div className='t-box'>
    <div className="testi-left">
    <div className='t-img'>
    <span className='tes-span'><i className="fas fa-quote-left"></i></span>
    </div>
    <div className="testi-right">
      <h2 className='roger'>ROGER SCOTT</h2>
      <h4 className='marketer'>MARKETING MANAGER</h4>
    </div>
    </div>
    
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  <div className='t-box'>
    <div className="testi-left">
    <div className='t-img'>
    <span className='tes-span'><i className="fas fa-quote-left"></i></span>
    </div>
    <div className="testi-right">
      <h2 className='roger'>ROGER SCOTT</h2>
      <h4 className='marketer'>MARKETING MANAGER</h4>
    </div>
    </div>
    
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  <div className='t-box'>
    <div className="testi-left">
    <div className='t-img'>
    <span className='tes-span'><i className="fas fa-quote-left"></i></span>
    </div>
    <div className="testi-right">
      <h2 className='roger'>ROGER SCOTT</h2>
      <h4 className='marketer'>MARKETING MANAGER</h4>
    </div>
    </div>
    
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
 

 
  

  
   
    
</Carousel>
         </div>
       </div>
       </section> 
    </div>
  )
}

export default Testimonials
