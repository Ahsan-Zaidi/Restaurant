import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginbottom: '1rem' }} >
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' classname='spoon__img' />
  </div>
);

export default SubHeading;
