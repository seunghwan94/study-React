import React from 'react';
import './Airbnb.css';
const Airbnb = ({color, title, distance, src}) => {
  return (
    <div className="airbnb-card">
      <div className='img' style={{backgroundImage:src}}></div>
      <div className='text' style={{background:color}}>
        <h3>{title}</h3>
        <p>{distance}km</p>
      </div>
    </div>
  );
}

export default Airbnb;
