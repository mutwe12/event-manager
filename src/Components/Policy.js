import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Policy = () => {
  return (
    <div>
      <Nav />
      <div className='container'>
        <h2>Policy</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h3 className='card-title'>Privacy Policy</h3>
                <p className='card-text'>We are committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and disclose your personal information when you use our website.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h3 className='card-title'>Terms of Service</h3>
                <p className='card-text'>By accessing or using our website, you agree to comply with our Terms of Service. These terms govern your use of our website and any services offered through it.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h3 className='card-title'>Refund Policy</h3>
                <p className='card-text'>Our Refund Policy outlines the conditions under which refunds are provided for our services. Please review this policy carefully before making a purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;
