import React from 'react';

const Clock = () => {
  return (
    <div>
      <h1>현재 시간 연습</h1>
      <h2>현재시간 : { new Date().toLocaleTimeString() }</h2>
    </div>
  );
}

export default Clock;
