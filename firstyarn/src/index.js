import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './component/First';
import Props from './default/Props';
import ClockPractice from './practice/ClockPractice';
import ComponentPractice from './default/ComponentPractice';
import ComponentExtracting from './default/ComponentExtracting';
import ReplyList from './practice/ReplyList';
import AirbnbList from './practice/AirbnbList';
import StateLifeCycleList from './default/StateLifeCycleList';
import UseState from './default/UseState';
import ArrayFruits from './practice/ArrayFruits';
import ArrayFruits2 from './practice/ArrayFruits2';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(()=>{
    root.render(
    <React.StrictMode>
      <ArrayFruits2 />
      <App />
      <First />
      <Props />
      <ClockPractice />
      <ComponentPractice name="test" />
      <ComponentExtracting author={{ name:"객체의객체" , avatarUrl:"https://placehold.co/60x40" }} text="sample text" date={new Date()} />
      <ReplyList />
      <AirbnbList />
      <StateLifeCycleList />
      <UseState />
      <ArrayFruits />
    </React.StrictMode>
  );  
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
