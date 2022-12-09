import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about' >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'></img>      
    </div>

    <div className='app__aboutus-content flex__center' >
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' classname="spoon__img" />
        <p classname='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, esse et ut, similique perspiciatis iusto illum repellendus hic facilis, sunt illo tempora quasi harum beatae commodi. Dolore tempore labore rerum.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
