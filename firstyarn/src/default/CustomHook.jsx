import React, { useEffect, useState } from 'react';

const MAX_CNT= 10;

// 원래는 따로 페이지 빼야됨 custom hook
const useCnt = (val) => {
  const [cnt, setCnt] = useState(val);
  const inc = () => setCnt(cnt => cnt + 1);
  const dec = () => setCnt(cnt => Math.max(cnt - 1, 0));

  return [cnt, inc, dec];
}

const CustomHook = () => {
  const [is, setIs] = useState(false);
  const [cnt, inc, dec] = useCnt(0);

  useEffect(() => {
    setIs(cnt >= MAX_CNT);
  },[cnt]);

  return (
    <div style={{padding: 16}}>
      <p>{`총 ${cnt}명 수용했습니다.`}</p>
      <button onClick={inc} disabled={is}>입장</button>
      <button onClick={dec}>퇴장</button>
      {is && <p style={{color: "red"}}>정원이 가득 찼습니다.</p>}
    </div>
  )
}

export default CustomHook;
