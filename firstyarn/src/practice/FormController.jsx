import React, { useState } from 'react';

const TopicList = ({topings, setMyTopings}) => {
  const [list, setList] = useState([]);
  
  const handleChange = e =>{
    const ck = e.target.checked;
    if(ck && list.length > 2){
      alert("최대 3개");
      return;
    }
    const target = ck ? [...list, e.target.value] : list.filter((ci)=> ci !== e.target.value);
    setList(target);
    setMyTopings(target);
  };

  return topings.lenght === 0 ? 
    <h1>토핑이 없습니다.</h1> :
    (
      <>
        <h1>최대토핑은 3개입니다.</h1>
        <ul>
          {topings.map((t,i)=>
            <li key={i}>
              <label>
                <input type='checkbox' name='toping' value={t} onChange={handleChange} checked={list.includes(t)} />{t}
              </label>
            </li>
          )}
        </ul>
      </>
    )
}; 


const FormController = () => {
  const [myTopings, setMyTopings] = useState([])
  const topings = ["베이컨","페퍼로니","파인애플","치즈","고구마","새우","불고기"];

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if(myTopings.length === 0){
        alert ("최소 1개 토핑을 선택해라");
        return;
      }
      alert(myTopings.join('',''))
    }}>
      <TopicList topings={topings} setMyTopings={setMyTopings} />
      <button>주문</button>
    </form>
  );
}

export default FormController;
