import React from 'react';
import Airbnb from './Airbnb';



const AirbnbList = () => {
  const datas=[
    {
      color: "#de3151",
      title: "서울",
      distance: 2,
    },
    {
      color: "#cc2d4a",
      title: "인천",
      distance: 29,
    },
    {
      color: "#d93b30",
      title: "대구",
      distance: 237,
    },
    {
      color: "#bc1a6e",
      title: "대전",
      distance: 140,
    },
  ]

  const url = {src:"https://placehold.co/200x200"}
  // const copiedUrl1 = {src:url.src}
  // const copiedUrl2 = {...url}
  // const src = url.src;
  // const copiedUrl3 = {src}


  return (
    <div className='contain'>
      <h1> 설레는 다음 여행을 위한 아이디어</h1>
      <div className='main-contain'>
        {datas.map((data,idx)=>{
          return (
            <Airbnb key={idx} {...data} {...url}/>
          );
        })}
      </div>
    </div>
  );
}

export default AirbnbList;
