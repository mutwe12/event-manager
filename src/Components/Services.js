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

function Services() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <h2 className='text-center'>Services</h2>
        <p className='text-center'>Here are some of the services we provide:</p>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <img src={A} className='card-img-top' alt='Event Planning' />
              <div className='card-body'>
                <h5 className='card-title'>Wedding Engagement Plans</h5>
                <p className='card-text'>
                  AMEA Event Management specializes in crafting unforgettable moments
                  for couples embarking on their journey together. Our wedding
                  engagement plans are meticulously designed to create an intimate,
                  romantic, and personalized experience. From selecting breathtaking venues
                  to curating bespoke themes, we ensure that every detail reflects the love
                  story of the couple. Our team orchestrates the perfect ambiance,
                  including exquisite décor, entertainment,
                  and catering, to make this special occasion an unforgettable milestone.
                </p>
                <a class="card-link btn btn-primary">Read more</a>
              </div>
             
            </div>
            <div className='card mb-2'>
              <img src={B} className='card-img-top' alt='Vendor Management' />
              <div className='card-body'>
                <h5 className='card-title'> Corporate Happy Hours:</h5>
                <p className='card-text'>

                  Elevate your corporate gatherings with AMEA's tailored happy hour experiences.
                  Whether it's fostering team bonding or impressing clients, our events are expertly designed to infuse relaxation, networking, and a touch of sophistication. We offer a range of venues, thematic concepts, and engaging activities to suit your corporate culture. From trendy cocktail mixers to elegant wine tastings, our attention to detail ensures a seamless and enjoyable experience for all attendees.

                </p>
                <a class="card-link btn btn-primary">Read more</a>
              </div>
            </div>
            <div className='card mb-2'>
              <img src={C} className='card-img-top' alt='On-site Support' />
              <div className='card-body'>
                <h5 className='card-title'>Birthday Plans:
                </h5>
                <p className='card-text'>
                  Celebrate life's milestones with AMEA's exceptional
                  birthday planning services. We specialize in creating
                  joyous and memorable experiences for individuals of all ages.
                  From themed children's parties to sophisticated adult celebrations,
                  our team customizes every aspect, including décor, entertainment,
                  and catering, to match the personality and preferences of the honoree.
                  Let us bring your vision to life and turn your
                  birthday celebration into an extraordinary affair.
                </p>
                <a class="card-link btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <img src={D} className='card-img-top' alt='Event Coordination' />
              <div className='card-body'>
                <h5 className='card-title'>Graduation Party Planning:
                </h5>
                <p className='card-text'>
                  Graduating is a momentous achievement, and AMEA Event
                  Management takes pride in organizing memorable graduation parties that honor this milestone. Our team designs events that reflect the graduate's journey and accomplishments. Whether it's a sophisticated soirée or a lively gathering, we curate unique themes, décor elements, and entertainment
                  options to ensure a fitting celebration for this important transition in life.
                </p>
                <a class="card-link btn btn-primary">Read more</a>
              </div>
            </div>
            <div className='card'>
              <img src={E} className='card-img-top' alt='Guest List Management' />
              <div className='card-body'>
                <h5 className='card-title'>Wedding Launches:
                </h5>
                <p className='card-text'>
                  AMEA specializes in creating grand and spectacular wedding launches that set the tone for a couple's future together. These events serve as a prelude to the wedding, offering an opportunity to announce and celebrate the upcoming union in style. From elegant soirées to themed extravaganzas, our team meticulously plans and executes these launches, leaving a lasting impression on guests while capturing the essence of the couple's love story.
                </p>
                <a class="card-link btn btn-primary">Read more</a>
              </div>
            </div>
            <div className='card'>
              <img src={F} className='card-img-top' alt='Post-event Evaluation' />
              <div className='card-body'>
                <h5 className='card-title'>Wedding Planning</h5>
                <p className='card-text'>
                  Understand the Couple's Vision:
                  Meet with the couple to understand their vision, preferences, and expectations for the wedding. Discuss themes, color schemes, desired ambiance, and any specific elements they wish to incorporate.

                </p>
                <a class="card-link btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Services;
