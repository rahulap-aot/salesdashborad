import React from 'react';
import './SideBar.css';
import SideBarImg from './SideBarImg';
import images from '../assets/Images';

const SideBar = ({ prove, hoveredItem, setHoveredItem }) => {
  return (
    <div className={prove ? 'main-side-bar2' : 'main-side-bar'}>
      <div className={prove ? 'span-color2' : 'span-color'}>
        <span className='span1'></span>
        <span className='span2'></span>
        <span className='span3'></span>
      </div>
      <div className='main-side-image'>
        {images.map((image, index) => (
          <SideBarImg
            image={image.src}
            key={index}
            text={image.text}
            alt={`Image ${index + 1}`}
            prove={prove}
            isHovered={hoveredItem === index}
            onHover={() => setHoveredItem(index)}
            onHoverOut={() => setHoveredItem(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
