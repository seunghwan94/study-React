import React, { useEffect, useState } from 'react';
import { Link,  useNavigate,  useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {
  const { req, error, loading } = useAxios();
  const navigate = useNavigate();
  const { num } = useParams();
  const { email } = useAuth();
  const [ note, setNote ] = useState({});
  const [ myLike, setMyLike] = useState({});

  // effect >> api호출
  useEffect(() => {
    (async () => {
      setNote(await req('get',`note/${num}`))
      const queryString = new URLSearchParams({email, num}).toString();
      setMyLike(await req('get', `likes?${queryString}`));
    })()
  }, [num, req, email]);

  if(error) return <div><h1>에러 발생</h1></div>;
  if(loading) return <div><h1>로딩중</h1></div>;

  const handleDelete = e => {
    e.preventDefault();
    if(!window.confirm("삭제하시겠습니까?")) return;
    req('delete', `note/${num}`)
    navigate("/list");
  }
  const handleLikesToggle = async e => {
    e.preventDefault();
    await req('post', `likes`, {email, num}, { 'Content-Type': 'application/json' });
    setMyLike(!myLike);
  }
  return note && (
    <div>
      <h1>View</h1>
      <p>{note.title}</p>
      <p>{note.content}</p>
      <p>{note.memberEmail}</p>
      <p><button onClick={handleLikesToggle}> {myLike ? '♥' : '♡'} note.likesCnt </button></p>
      <Link to={`/modify/${num}`} ><button>수정</button></Link>

      <div>
        <h3>attachDtos : {note.attachDtos && note.attachDtos.length}</h3>
        <ul>
          {note.attachDtos && note.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
        </ul>
      </div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default Write;
