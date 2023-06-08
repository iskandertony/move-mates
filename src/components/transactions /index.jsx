import React from "react";

import Icon from "../icon";

import "./style.scss";
import { Progress } from "antd";
const Transactions = () => {
  const clients = [
    {
      name: "Айдай Айдай",
      work: "Hiit",
      time: "16 мая, 10:00 утра ",
    },
    {
      name: "Куб байке",
      work: "Strength",
      time: "16 мая, 10:00 утра ",
    },
  ];
  const countries = [
    { country: "Кыргызстан", percent: 94 },
    { country: "Россия", percent: 80 },
    { country: "Украина", percent: 85 },
    { country: "Беларусь", percent: 70 },
    { country: "Узбекистан", percent: 90 },
    { country: "Казахстан", percent: 95 },
  ];
  const CountryProgress = ({ country, percent }) => {
    return (
      <div className="countryProgress">
        <div className="flex alignC justify-s gap-5">
          <div className="text">{country}</div>
          <div className="text">{percent}%</div>
        </div>
        <Progress percent={percent} showInfo={false} />
      </div>
    );
  };

  return (
    <div className="transaction">
      {clients.map((item) => (
        <div className={"card_transaction"}>
          <Icon name={"clock"} />
          <div>
            <div className={"title"}>{item.name}</div>
            <div className={"text"}>{item.time}</div>
            <div className={"text"}>Тренировка {item.work}</div>
          </div>
          <div>+2000 сом</div>
        </div>
      ))}
      {/*<div className="name">Статистика</div>*/}
      {/*<div className="card_stats">*/}
      {/*  <div className={"stats"}>*/}
      {/*    <div>География клиентов</div>*/}
      {/*    <div>Страна</div>*/}
      {/*  </div>*/}
      {/*  <div className="countries">*/}
      {/*    {countries.map((item, index) => (*/}
      {/*      <CountryProgress*/}
      {/*        key={index}*/}
      {/*        country={item.country}*/}
      {/*        percent={item.percent}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Transactions;
