import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {
  const { email } = useAuth();
  const navigate = useNavigate();
  const { req } = useAxios();
  const [uploaded, setUploaded] = useState([]);
  const [ board, setBoard ] = useState({
    title:'',
    content:'',
    memberEmail: email,
    attachDtos: []
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = async e => {
    try{
      console.log(board);
      const resp = await req('post', 'note', {...board, attachDtos : uploaded});
      console.log(resp);
    }catch(error){
      console.error("실패", error.message);
    }
    alert("글쓰기 성공");
    navigate("/list");
  }

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files) return;
    
    const formData = new FormData();
    for(let i = 0; i < files.length; i++){
      formData.append('file', files[i]);
    }

    try {
      const result = await req("post", "file/upload", formData, {'Content-Type' : 'multipart/form-data'})
      console.log(result);
      setUploaded([...uploaded, ...result]);


    } catch (error) {
      console.error("Error during upload:", error);
    }
    e.target.value = "";
  };

  return (
    <div>
      <h1>Write</h1>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
        console.log(board);
      }} encType=''>
        <input type='text' name="title" value={board.title} onChange={handleChange}/>
        <input type='text' name="content" value={board.content} onChange={handleChange}/>
        <input type='text' name="memberEmail" value={board.memberEmail} onChange={handleChange}/>
        <button>클릭</button>
        <input type='file' onChange={handleFileUpload} multiple />
      </form>
      <ul>
        {uploaded.map(u => <li key={u.uuid}><Link to={u.url}> {u.origin} </Link><button onClick={e => setUploaded( uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid)) } data-uuid={u.uuid}>삭제</button></li>)}
      </ul>
    </div>
  );
}

export default Write;
