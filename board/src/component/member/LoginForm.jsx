import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';



const LoginForm = () => {
  const [ member, setMember ] = useState({email:'',password:''});
  const { loading, error, req} = useAxios('http://localhost:9999/api/');
  const {login} = useAuth();
  

  const handleChange = async e => {
    const {name, value} = e.target;
    setMember({...member, [name] : value});
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const resp = await req('get', `login?email=${member.email}`);
      resp && login(member.email,resp);
    }catch(error){
      console.error("로그인 실패", error.message);
    }
    
    
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email : </label>
        <input type='text' name='email' id='email' value={member.email}  onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='password'>password : </label>
        <input type='text' name='password' id='password' value={member.password} onChange={handleChange}/>
      </div>
      <div>
        <button disabled={loading}>{loading ? '로그인중...' : '로그인'}</button>
        {/* <button>로그인</button> */}
        {error && <p style={{color:'red'}}>에러 발생 {error.message}</p>}
      </div>
    </form>
  );
}

export default LoginForm;
