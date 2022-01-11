import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <>
            <section className='contact-aria p' id='contact-aria'>
                <div className="container">
                  <div className="contact-wapper">
                  <div className="about-left about-box">
              <div className="about-left-img img7"></div>
            </div>

            <div className="contact-right">
              <div className="btns2">
                <div className="contact-text">
                    <h2>Contact Me</h2>
                    <p>We're open for any suggestion or just to have a chat</p>
                </div>
                <div className="address-wapper">
                    <div className="address-box">
                        <h3>MY ADDRESS:</h3>
                        <p>198 West 21th Street,<br />
                         Suite 721 New York NY 10016</p>
                    </div>
                    <div className="address-box">
                        <h3>MY EMAIL:</h3>
                        <p><a href='mailto:info@yoursite.com'>info@yoursite.com</a></p>
                    </div>
                    <div className="address-box">
                        <h3>MY PHONE:</h3>
                        <p><a href='tel://+ 1235 2355 98'>+ 1235 2355 98</a></p>
                    </div>
                </div>
                <form className='form-tag'>
                    <div className="box-c">
                    <input type="text" name='name' placeholder='Name' />
                    <input type="email" name='email' placeholder='Email' />
                    </div>
                    <input type="text" name='text' placeholder='Subject' />
                    <textarea type='text' cols={30} rows={4} placeholder='Create a message here' ></textarea>
                   <div className="form-a">
                   <a href="#" >Send Me</a>
                   </div>
                </form>
              </div>

              
              
            </div>
                      </div>  
                </div>
            </section>
        </>
    )
}

export default Contact
