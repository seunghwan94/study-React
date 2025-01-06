import React, { useState } from 'react';
import RenderLoginToolbar from './RenderLoginToolbar';

const RenderLogin = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const onClickLogIn = () => { setIsLogIn(true); }
  const onClickLogOut = () => { setIsLogIn(false); }

  return (
    <div>
      <RenderLoginToolbar isLogIn={isLogIn} onClickLogin={onClickLogIn} onClickLogout={onClickLogOut} />
      <div style={{padding:16}}>리액 공부</div>
    </div>
  );
}

export default RenderLogin;
