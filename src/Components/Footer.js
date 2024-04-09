import React from 'react';

const Footer = () => {
  return (
    <div className='text-center bg-primary text-white py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h5>About Us</h5>
            <p>AMEA Event Management specializes in crafting 
              unforgettable moments for couples embarking on 
              their journey together. Our wedding engagement 
              plans are meticulously designed 
              to create an intimate, romantic, and personalized experience..</p>
          </div>
          <div className='col-md-4'>
            <h5>Contact Us</h5>
            <p>Email:ameaeventsrw@gmail.com</p>
            <p>Phone: +250789 554 577</p>
            <p>Address: KK 718 St, Kigali</p>
          </div>
          <div className='col-md-4'>
            <h5>Follow Us</h5>
            <div className='social-icons'>
              <a href='#'><i className='fab fa-facebook-f'></i></a>
              <a href='#'><i className='fab fa-twitter'></i></a>
              <a href='#'><i className='fab fa-instagram'></i></a>
              <a href='#'><i className='fab fa-linkedin'></i></a>
              <p> All rights reserved &copy;</p>
                        <p> 2024 by EmaeEvent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
