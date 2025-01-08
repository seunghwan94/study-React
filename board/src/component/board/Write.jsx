import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Write = () => {
  const [ board, setBoard ] = useState({title:'',content:'',memberEmail:''});
  const navigate = useNavigate();
  const { req } = useAxios();

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = e => {
    req('post', 'board', board);

    alert("글쓰기 성공");
    navigate("/");
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

export default Write;
