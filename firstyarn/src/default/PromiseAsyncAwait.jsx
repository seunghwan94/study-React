import React, { useEffect, useState } from 'react';
import PromiseAsyncAwaitTarget from "./PromiseAsyncAwaitTarget";

/**
 * jQuesy (ajax)
 *  jqueryXmlHttpRequest
 *  $.ajax().done().done() 체이닝 가능
 *  
 * 
 * Promise
 *  순차적으로 사용할 때 사용
 *  반환 타입
 *  jqueryXmlHttpRequest(jQuesy) == Promise(fetch)
 *    - Pending (대기)
 *    - resolve (성공)
 *    - reject (error)
 *  .then(function (data){ }) 순차처리 때문에 사용
 *  .catch(function (error){ })
 * 
 * Fetch (비동기 처리)
 *  window 객체 소속 
 *  내부적으로 Promise 사용
 *  ※ error 404, 500 등 처리를 못 함
 *  ex) fetch(url, options)
 *        .then((res) => console.log("response:", response))
 *        .catch((error) => console.log("error:",error));
 *
 * CORS (Cross-Origin Resource Sharing) 
 *  보안 정책 때문 (브라우저가 막음)
 *  같은 출처에서만 리소스 공유 가능
 *  서버 측에 @CrossOrigin("http://localhost:3000") 추가
 * 
 * 
 */


const PromiseAsyncAwait = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(()=>{
    (async () => {
      const response = await fetch("http://localhost:8080/api/todo/list");
      
      if(!response.ok) throw new Error("네트워크 상태 불량");
      const data = await response.json();
      setTodos(data);
    })();
  }, []);  

  console.log(todos);

  return !todos.length ? <p>로딩중...</p> : <ul>{todos.map(todo => <PromiseAsyncAwaitTarget key={todo.id} {...todo} />)}</ul> ;
}

export default PromiseAsyncAwait;
