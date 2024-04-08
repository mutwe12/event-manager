import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  const contactInfo = {
    location: "KK 718 St, Kigali",
    email: "agabagorgeous58@gmail.com",
    tel: "+250789 554 577"
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h1>Contact Us</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Location</h5>
            <p className="card-text">{contactInfo.location}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Email</h5>
            <p className="card-text">{contactInfo.email}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Phone</h5> {/* Changed TEL to Phone for better clarity */}
            <p className="card-text">{contactInfo.tel}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
