import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {
  const { email, token } = useAuth();
  const navigate = useNavigate();
  const { req } = useAxios();

  const [ board, setBoard ] = useState({
    title:'',
    content:'',
    memberEmail: email});

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = async e => {
    try{
      const resp = await req('post', 'note', board);
      console.log(resp);
      
    }catch(error){
      console.error("실패", error.message);
    }
    // alert("글쓰기 성공");
    navigate("/list");
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const headers = {'Authorization': `Bearer ${token}`}
      const response = await fetch("http://localhost:9999/api/v1/file/upload", {
        method: "POST",
        body: formData,
        headers
      });
  
      const result = await response.json();
      if (result.status === "success") {
        console.log("File uploaded successfully:", result.data);
      } else {
        console.error("Upload failed:", result.message);
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };

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
        <input type='file' onChange={handleFileUpload}/>
      </form>
    </div>
  );
}

export default Write;
