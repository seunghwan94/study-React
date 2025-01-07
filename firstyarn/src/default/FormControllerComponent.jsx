import React from 'react';
import { useState } from 'react';


const FormControllerComponent = () => {
  const [v, setVal] = useState('');
  const [req, setReq] = useState('');
  const [fruit, setFruit] = useState('');
  const [files, setFiles] = useState([]);
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if(!fruit) alert("과일선택해");
  }
  const handleChange = e => { 
    const target = e.target;
    
    switch (target.id){
      case "name":
        setVal(target.value.replace(/[^0-9]/g,""));
        break;
      case "req":
        setReq(target.value.toLowerCase());
        break;
        case "fruit":
          setFruit(target.value);
          break;
        case "file":
          setFiles(Array.from(e.target.files, f => f.name));
          break;
        default:
          break
    }
  }
          
  const FileInput = <input type='file' id="file"name="file" multiple onChange={handleChange}/>;
  return (
    <form onSubmit={handleSubmit}>
      <label>이름 <input type='text' name="name" id="name" onChange={handleChange} value={v} /></label>
      <label>
        <p>요청사항</p>
        <textarea onChange={handleChange} id="req" name="req" value={req}></textarea>
      </label>
      <label htmlFor="fruit">과일을 선택해라</label>
      <select id="fruit" onChange={handleChange}>
        <option value="">과일을 선택해라</option>
        <option value={"apple"}>사과</option>
        <option value={"banana"}>바나나</option>
        <option value={"grape"}>포도</option>
        <option value={"watermelen"}>수박</option>
      </select>

      <input type='checkbox' name="topic" id="topic" value="1" onChange={handleChange}/>
      <input type='checkbox' name="topic" id="topic" value="2" onChange={handleChange}/>
      <input type='checkbox' name="topic" id="topic" value="3" onChange={handleChange}/>

      <br></br>
      {/* 파일 업로드 후 value 변경 불가 >> 조건부 렌더링을 통해 컴포넌트 재로드  */}
      {/* <FileInput /> */}
      
      <input type='file' id="file"name="file" multiple onChange={handleChange}/>
      <p>업로드된 파일</p>
      <ul>
        {files.map(f => <li key={f}>{f}</li>)}
      </ul>
      <hr/>
      <button>제출</button>
    </form>
  );
}

export default FormControllerComponent;
