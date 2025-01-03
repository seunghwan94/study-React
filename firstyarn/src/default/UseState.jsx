import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭</p>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
      <button onClick={()=>setCount(0)}>0</button>
    </div>
  );
}

export default UseState;
