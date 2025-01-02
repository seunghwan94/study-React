import React from 'react';

function PropsPractice({name,target}){
  return (
    <div>
      <h1>{`${name}`}</h1>
      <h2>{`${name} ${target} `}</h2>
    </div>
  );
}

export default PropsPractice;
