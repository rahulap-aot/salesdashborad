import React, { useState } from 'react';
import './App.css';
import DashBord from './components/DashBord';
import SideBar from './components/SideBar';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null); // Shared state for hovered item
  const prove = false;

  return (
    <>
      <div className='main-page'>
        <SideBar prove={prove} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
        <DashBord hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      </div>
    </>
  );
}

export default App;
