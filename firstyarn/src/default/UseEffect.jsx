import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // 업데이트 마다 호출 => componentDidUpdate()
  // useEffect(()=>{document.title = `총 ${count} 클릭이다`});
  // useEffect(()=>{document.title = `총 ${count} 클릭`},[count]);

  // 한번씩만 실행  => componentDidMount / componentWillUnmount
  // useEffect(()=>{document.title = `총 ${count} 클릭`},[]);
  
  return (
    <div>
      <p>총 {count} 클릭</p>
      <button onClick={()=>setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default UseEffect;
