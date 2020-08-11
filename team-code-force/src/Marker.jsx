import React, { useState } from 'react';
import NPSLogo from './images/NPS.png'


const Marker = (props) => {

  const [isShown, setIsShown] = useState(false);

  const clickHandler = (url) => {
    window.open(url);
  }
  return (
    <div
    onClick={() => clickHandler(props.url)}
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
      <img className="npmarker" src={NPSLogo} alt="NPS Logo"/>
      {isShown && (
        <div className="marker">
          {props.name}
        </div>
      )}
    </div>
  )
}

export default Marker;