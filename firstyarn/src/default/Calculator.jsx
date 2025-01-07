import React from 'react';
import { useState } from 'react';

const scaleName = {
  c : "섭씨",
  f : "화씨"
}
const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const tryConver = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (isNaN(input)) return "";
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
 
  return rounded.toString();
}
// 컴포넌트 구간 
const TemperatureInput = ({scale, temperature, onTemperatureChange}) => {
  return (
    <fieldset>
      <legend>온도를 입력해주세요.(단위 : {scaleName[scale]})</legend>
      <input value={temperature} onChange={e => onTemperatureChange(e.target.value)}/>
    </fieldset>
  )
}

const BoilingVerdict = ({celsius}) => (celsius >= 100) ? <p>물끊기 O</p> : <p>물끊기 X</p> ;



const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");
  
  const handleCelsiusChange = temperature => {
    setTemperature(temperature);
    setScale('c');
  }

  const handleFahrenheitChange = temperature => {
    setTemperature(temperature);
    setScale('f');
  }
  
  const celsius = scale === 'f' ? tryConver(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConver(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;
