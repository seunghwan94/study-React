
// 리액트 컴포넌트중 함수 컨포넌트이다.
// index.js -> App.js -> ComponentPractice.jsx


// function ComponentPractice(props){
//   return <h1>컴포넌트 {props.name}</h1>
// }

import { Component } from "react";

class ComponentPractice extends Component{
  render(){
    return <h1>컴포넌트 {this.props.name}</h1>
  }
}

// 호출을 하기 위해선 반출을 해야된다.
export default ComponentPractice