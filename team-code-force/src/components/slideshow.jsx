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
      <h1 id="logo">National Park Pal!</h1>
      <h3>Search parks and activities to optimize your road trip experience!</h3>
      <Zoom {...zoomInProperties}>
        { slideShow.map((each, index) => (
          <div key={index}>
            <h2>{each.name}</h2>
            <h4>{each.review}</h4>
            <img style={{ width: '60%', height: '70%' }} src={each.image} alt="park pic" />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
