import React, { useEffect, useState, useRef, setTimeoutCount } from 'react';
import { slideShow } from './slideshow-data';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const SlideShow = () => {
  
    const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        { slideShow.map((each, index) => {
            return (
                <div>
                    <img key={index} style={{width: "100%", height: "50%"}} src={each.image} />
                    <h4>{each.name}</h4>
                    <p>{each.review}</p>                 
                </div>
                )
            }
        )}
      </Zoom>
    </div>
  )
};


export {
    SlideShow
}