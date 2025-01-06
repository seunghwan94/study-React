import React, { useState } from 'react';

const ArrayFruits2 = () => {
  const fruits = ["사과","바나나","딸기","포도","복숭아","파인애플"];
  const fruitsCount = fruits.map(f => ({name: f, count: 0}));
  const [bucket, setBucket] = useState([...fruitsCount]);
  

  return (
    <div>
      <h3>{bucket}</h3>
      <button onClick={()=>{
        const rand = parseInt(Math.random() * bucket.length);
        bucket[rand].count++;
        setBucket([...bucket]);
      }}>과일 추가</button>
      <button onClick={()=>setBucket([...fruitsCount])}>바구니 비우기</button>
      <ul>
        {bucket.map((f,i)=>{ 
          return <li key={i}>{f.name}{f.count} 개</li>;
        })}
      </ul>
    </div>
  );
}


export default ArrayFruits2;
