import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const List = () => {
  const {data, loading, error, req} = useAxios();
  // state
  const navigate = useNavigate();

  // effect >> api호출
  useEffect(() => {
    req('get','note/listall');
  }, [req]);

  if(error) return <div><h1>에러 발생</h1></div>;
  if(loading) return <div><h1>로딩중</h1></div>;
  
  return (
    <div>
      <button onClick={() => navigate('/write')}>글쓰기</button>
      <ul>
        {data && data.map(b => <li key={b.num}><Link to={`/view/${b.num}`}>{b.title}</Link></li>)}
      </ul>
    </div>
  );
}

export default List;
