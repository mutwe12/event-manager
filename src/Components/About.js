import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const About = () => {
  const contactInfo = {
    location: "KK 718 St, Kigali",
    email: "agabagorgeous58@gmail.com",
    tel: "+250789 554 577"
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h1>About</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contact Information</h5> {/* Updated card title for better clarity */}
            <p className="card-text">{contactInfo.location}</p>
            <p className="card-text">Email: {contactInfo.email}</p> {/* Updated card text for better clarity */}
            <p className="card-text">Tel: {contactInfo.tel}</p> {/* Updated card text for better clarity */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
