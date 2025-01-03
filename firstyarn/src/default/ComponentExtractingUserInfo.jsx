import React from 'react';
import ComponentExtractingImg from "./ComponentExtractingImg";

const ComponentExtractingUserInfo = ({author}) => {
  return (
    <div className="user-info">
      <ComponentExtractingImg author={author} />
      <div className="user-info-name">{author.name}</div>
    </div>
  );
}

export default ComponentExtractingUserInfo;
