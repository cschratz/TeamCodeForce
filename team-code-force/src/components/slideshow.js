import React from 'react';
import { Zoom } from 'react-slideshow-image';
import { slideShow } from './slideshow-data';
import 'react-slideshow-image/dist/styles.css';

const SlideShow = () => {
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        { slideShow.map((each, index) => (
          <div key={index}>
            <img style={{ width: '100%', height: '50%' }} src={each.image} alt="park pic" />
            <h4>{each.name}</h4>
            <p>{each.review}</p>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
