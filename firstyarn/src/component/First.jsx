import React from 'react';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'Lee',
  lastName : 'seung'
}

const comment = "인사말";

const el = <h1 title={comment}>Hello {formatName(user)}</h1>;

const First = () => {
  return el;
}

export default First;
