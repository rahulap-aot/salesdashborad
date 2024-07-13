import React from 'react';
import './SideBar.css';

const SideBarImg = ({ image, alt, text, prove, isHovered, onHover, onHoverOut }) => {
  return (
    <div
      className={prove ? 'image2' : 'image'}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      style={isHovered ? { transform: 'scale(1.1)' } : {}}
    >
      <img src={image} alt={alt} />
      {prove && <p>{text}</p>}
    </div>
  );
};

export default SideBarImg;
