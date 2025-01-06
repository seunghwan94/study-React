import React from 'react';


const PromiseAsyncAwaitTarget = ({id, content, writer, regDate}) => {
  return (
    <li>
      <p>{id}, {content}</p>
      <p>{writer}, {regDate}</p>
    </li>
  );
}

export default PromiseAsyncAwaitTarget;
