import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import A from './a.jpeg'
import B from './b.jpeg'
import C from './c.jpeg'
import D from './d.jpeg'
import E from './e.jpeg'
import F from './f.jpeg'
import G from './g.jpeg'

function Gallery() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <h2>Gallery</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img src={G} className='card-img-top' alt='Image 1' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={B} className='card-img-top' alt='Image 2' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={C} className='card-img-top' alt='Image 3' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={D} className='card-img-top' alt='Image 4' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={E} className='card-img-top' alt='Image 5' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img src={F} className='card-img-top' alt='Image 6' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
