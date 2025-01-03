import React, { useState } from 'react';

const ArrayFruits2 = () => {
  const fruits = {"사과":0, "바나나":0, "딸기":0,"포도":0,"복숭아":0,"파인애플":0}
  const [bucket, setBucket] = useState(fruits);  
  
  return (
    <div>
      <h3>{fruits['사과']}</h3>
      <button onClick={()=>setBucket([...bucket, bucket[fruitsRandom(fruits)]] )}>과일 추가</button>
    </div>
  );
}

function fruitsRandom(fruits){
  return fruits[Math.floor(Math.random()*fruits.length)];
}

export default ArrayFruits2;
