import React from 'react'
import '../sassfiles/collab.sass';
// import Carousel_1 from '../Subcomponents/Carousel_1';
import Carousel_2 from '../Subcomponents/Carousel_2';
import Carousel from '../Subcomponents/Carousel_1';


function Collabs() {
  return (
    <div className="main_container container-fluid">
      <section id="clients" class="s-clients box">
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full pe-0">
            <h3 className="subhead ">Our Clients</h3>
            <h1 id="h1">Glint has been honored to
              partner up with these clients</h1>
          </div>
        </div>
        <Carousel />
        <hr className='hr-line mx-auto' />
        <Carousel_2 />
      </section>
    </div>
  )
}

export default Collabs