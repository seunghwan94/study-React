import React from 'react';
import PropsPractice from './PropsPractice';
import ClassPractice from './ClassPractice';


const result = [
  {
    name : "props Arr3",
    target : 3
  },
  {
    name : "props Arr4",
    target : 4
  },
  {
    name : "props Arr5",
    target : 5
  }
]

const Props = () => {
  return (
    <>
      <PropsPractice name="props" target={1}/>
      <PropsPractice name="props practice" target={2}/>
      {/* <PropsPractice name={result[0].name} target={result[0].target}/> */}
      {result.filter(el => el.target != 4).map(({name, target}, idx) => <PropsPractice key={idx} name={name} target={target}/>)}
      <ClassPractice name="class" target="연습" />
    </>
  );
}

export default Props;
