import React, { Component } from 'react';
import StateLifeCycle from './StateLifeCycle';

const arr = [
  {text: "아침"},
  {text: "점심"},
  {text: "저녁"},
]

let timer;

class StateLifeCycleList extends Component {
  constructor(props){
    super(props);
    this.state = { msg: [] }
  }

  componentDidMount(){
    const { msg } = this.state;

    timer = setInterval(()=>{
      if(msg.length < arr.length){
        msg.push(arr[msg.length]);
        this.setState({msg})
      }else{
        clearInterval(timer)
      }
    }, 1000);

  }

  componentWillUnmount(){
    if(timer){
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.msg.map((msg, idx)=>{
          return <StateLifeCycle key={idx} {...msg} />
        })}
      </div>
    );
  }
}

export default StateLifeCycleList;
