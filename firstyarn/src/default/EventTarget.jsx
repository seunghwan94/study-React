import React from 'react';

const EventTarget = () => {
  return (
    <div style={{border: "5px solid", padding:50}} onClick={()=>console.log("최상위 클릭")}>
      <div style={{border: "5px solid", padding:50}} onClick={(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e.currentTarget.title);
        e.stopPropagation();
      }} title="배경이다.">
        <button style={{padding:20}} onClick={()=>console.log("최하위 클릭")}>클릭</button>
      </div>
    </div>
  );
}

export default EventTarget;
