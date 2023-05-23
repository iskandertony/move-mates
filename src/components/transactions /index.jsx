import React from "react";
import { Progress } from "antd";
import "./style.scss"; // замените 'YourScssFile' на название вашего SCSS файла

const CountryProgress = ({ country, percent }) => {
  return (
    <div className="countryProgress">
      <div className="flex alignC justify-s">
        <div>{country}</div>
        {percent}%<div></div>
      </div>
      <Progress percent={percent} showInfo={false} />
    </div>
  );
};

const App = () => {
  const countries = [
    { country: "Кыргызстан", percent: 94 },
    { country: "Россия", percent: 80 },
    { country: "Украина", percent: 85 },
    { country: "Беларусь", percent: 70 },
    { country: "Узбекистан", percent: 90 },
    { country: "Казахстан", percent: 95 },
  ];

  return (
    <div className="transaction">
      <div className="countries">
        {countries.map((item, index) => (
          <CountryProgress
            key={index}
            country={item.country}
            percent={item.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
