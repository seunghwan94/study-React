import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './component/First';
import Props from './default/Props';
import ClockPractice from './practice/ClockPractice';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
    root.render(
    <React.StrictMode>
      <App />
      <First />
      <Props />
      <ClockPractice />
    </React.StrictMode>
  );  
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
