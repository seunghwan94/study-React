import React, { useEffect } from 'react';
import { Link,  useNavigate,  useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Write = () => {
  const { req, data, error, loading } = useAxios();
  const navigate = useNavigate();
  const { num } = useParams();

  // effect >> api호출
  useEffect(() => {
    (async () => {
      const resp = await req('get',`note/${num}`);
      console.log(resp);
    })()
  }, [num,req]);

  if(error) return <div><h1>에러 발생</h1></div>;
  if(loading) return <div><h1>로딩중</h1></div>;

  const handleDelete = e => {
    e.preventDefault();
    if(!window.confirm("삭제하시겠습니까?")) return;
    req('delete', `note/${num}`)
    navigate("/list");
  }

  return data && (
    <div>
      <h1>View</h1>
      <p>{data.title}</p>
      <p>{data.content}</p>
      <p>{data.memberEmail}</p>
      <Link to={`/modify/${num}`} ><button>수정</button></Link>

      <div>
        <h3>attachDtos : {data.attachDtos.length}</h3>
        <ul>
          {data.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
        </ul>
      </div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default Write;
