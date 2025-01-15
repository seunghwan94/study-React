import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Modify = () => {
  const navigate = useNavigate();
  const { req } = useAxios();
  const { num } = useParams();

  const [ board, setBoard ] = useState({
    title:'',
    content:'',
    memberEmail: ''});

  // effect >> api호출
  useEffect(() => {
    (async () => {
      const resp = await req('get',`note/${num}`);
      console.log(resp);
      setBoard(resp);
    })()
    
  }, [num,req]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = async e => {
    try{
      const resp = await req('put', `note/${num}`, board);
      console.log(resp);
      
    }catch(error){
      console.error("실패", error.message);
    }
    // alert("글쓰기 성공");
    navigate("/list");
  }

  return (
    <div>
      <h1>Write</h1>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
        console.log(board);
      }}>
        <input type='text' name="title" value={board.title} onChange={handleChange}/>
        <input type='text' name="content" value={board.content} onChange={handleChange}/>
        <input type='text' name="memberEmail" value={board.memberEmail} onChange={handleChange}/>
        <button>클릭</button>
      </form>
    </div>
  );
}

export default Modify;
