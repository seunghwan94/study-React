import React, { useState } from 'react';

/**
 * 
 * 
 */
const Event = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <>
      <button onClick={(e) => {setToggle(toggle => !toggle)}}>클릭</button>
      <div>{toggle ? "켜짐" : "꺼짐"}</div>
    </>
  );
}

export default Event;
