import React from 'react';
import './DashBord.css';
import SideBar from './SideBar';

const DashBord = ({ hoveredItem, setHoveredItem }) => {
  const prove = true;

  return (
    <div className='main-dashbord'>
      <SideBar prove={prove} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
    </div>
  );
}

export default DashBord;
