import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Modify = () => {
  const navigate = useNavigate();
  const { req } = useAxios();
  const { num } = useParams();
  const [uploaded, setUploaded] = useState([]);

  const [ board, setBoard ] = useState({
    title:'',
    content:'',
    memberEmail: '',
    attachDtos:[]
  });

  // effect >> api호출
  useEffect(() => {
    (async () => {
      const resp = await req('get',`note/${num}`);
      console.log(resp);
      setBoard(resp);
      setUploaded(resp.attachDtos)
    })()
    
  }, [num,req]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = async e => {
    try{
      const resp = await req('put', `note/${num}`, {...board, attachDtos: uploaded});
      console.log(resp);
      
    }catch(error){
      console.error("실패", error.message);
    }
    alert("글수정 성공");
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
      <h1>Modify</h1>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
        console.log(board);
      }}>
        <input type='text' name="title" value={board.title} onChange={handleChange}/>
        <input type='text' name="content" value={board.content} onChange={handleChange}/>
        <input type='text' name="memberEmail" value={board.memberEmail} onChange={handleChange}/>

        
        <div>
          <h3>attachDtos : {board.attachDtos.length}</h3>
          <ul>
            {board.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
          </ul>
        </div>
        <button >글 수정</button>
        <hr />        
        <input type='file' onChange={handleFileUpload} multiple />
        <ul>
          {uploaded.map(u => <li key={u.uuid}><Link to={u.url}> {u.origin} </Link><button onClick={e => setUploaded( uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid)) } data-uuid={u.uuid}>삭제</button></li>)}
        </ul>
      </form>
    </div>
  );
}

export default Modify;
