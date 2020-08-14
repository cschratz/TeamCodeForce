/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import NPSLogo from './images/NPS.png';
import InfoWindow from './InfoWindow';

const Marker = ({
  url, name, desc, imagePark, user,
}) => {
  const [isShown, setIsShown] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const clickHandler = () => {
    // window.open(`localhost:3000/parks/${props.searchName}`);
    // window.open(url)
    setIsShown(!isShown);
    setIsHovered(false);
  };

  return (
    <div
      role="button"
      onClick={() => clickHandler()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsShown(false);
      }}
    >
      <img className="npmarker" src={NPSLogo} alt="NPS Logo" />
      {isShown && <InfoWindow name={name} desc={desc} url={url} image={imagePark} user={user}/>}
      {isHovered && (<div className="marker">{name}</div>)}
    </div>
  );
};

export default Marker;
