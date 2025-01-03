import React, { useState } from 'react';

const ArrayFruits = () => {
  const fruits = ["사과","바나나","딸기","포도","복숭아","파인애플"];
  const [bucket, setBucket] = useState([]);  
  
  return (
    <div>
      <h3>{bucket}</h3>
      <button onClick={()=>setBucket([...bucket, fruitsRandom(fruits)])}>과일 추가</button>
      <button onClick={()=>{
        bucket.splice(Math.floor(Math.random()*bucket.length),1);
        setBucket([...bucket])
      }}>과일 제거</button>
      <button onClick={()=>setBucket([])}>바구니 비우기</button>
      <ul>
        {fruits.map((f,i)=>{ 
          let count=0;
          bucket.forEach((e)=>{if(e==f){count++}});

          return <li key={i}>{f}{count} 개</li>;
        })}
      </ul>
    </div>
  );
}

function fruitsRandom(fruits){
  return fruits[Math.floor(Math.random()*fruits.length)];
}

export default ArrayFruits;
