import React from 'react';
import { Zoom } from 'react-slideshow-image';
import slideShow from './slideshow-data';
import 'react-slideshow-image/dist/styles.css';

const SlideShow = () => {
  const zoomInProperties = {
    indicators: true,
    scale: 1.5,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        { slideShow.map((each, index) => (
          <div key={index}>
            <h4>{each.name}</h4>
            <p>{each.review}</p>
            <img style={{ width: '65%', height: '50%' }} src={each.image} alt="park pic" />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
