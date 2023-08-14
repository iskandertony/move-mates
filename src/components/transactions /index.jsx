import React, { useState, useEffect } from "react";
import Icon from "../icon";
import "./style.scss";
import Avatar from "../avatar";

const Transactions = () => {
  const clients = [
    {
      name: "Айдай Айдай",
      work: "Hiit",
      time: new Date(),
    },
    {
      name: "Куб байке",
      work: "Strength",
      time: new Date(),
    },
    {
      name: "Вчерашний клиент",
      work: "Yoga",
      time: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      name: "Позавчерашний клиент",
      work: "Cardio",
      time: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
  ];

  const [todayTransactions, setTodayTransactions] = useState([]);
  const [yesterdayTransactions, setYesterdayTransactions] = useState([]);
  const [previousTransactions, setPreviousTransactions] = useState([]);

  const formatTime = (pastDate) => {
    const diffInSeconds = Math.floor((new Date() - pastDate) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} секунд назад`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} минут назад`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} часов назад`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} дней назад`;
    }
  };

  useEffect(() => {
    setTodayTransactions(
      clients.filter((client) => client.time.getDate() === new Date().getDate())
    );
    setYesterdayTransactions(
      clients.filter(
        (client) => client.time.getDate() === new Date().getDate() - 1
      )
    );
    setPreviousTransactions(
      clients.filter(
        (client) => client.time < new Date().setDate(new Date().getDate() - 2)
      )
    );
  }, []);

  return (
    <div className="transaction">
      <div className="flex alignC justify-s">
        <div className={"name"}>Сегодня</div>
        <div>
          <Icon name={"calendar"} />
        </div>
      </div>
      {todayTransactions.map((item) => (
        <div className={"card_transaction"}>
          <Avatar />
          <div>
            <div className={"title"}>{item.name}</div>
            <div className={"text"}>{formatTime(item.time)}</div>
          </div>
          <div className={"text"}>+2000 сом</div>
        </div>
      ))}

      <div className={"name"}>Вчера</div>
      {yesterdayTransactions.map((item) => (
        <div className={"card_transaction"}>
          <Avatar />
          <div>
            <div className={"title"}>{item.name}</div>
            <div className={"text"}>{formatTime(item.time)}</div>
          </div>
          <div className={"text"}>+2000 сом</div>
        </div>
      ))}

      <div className={"name"}>Предыдущие</div>
      {previousTransactions.map((item) => (
        <div className={"card_transaction"}>
          <Avatar />
          <div>
            <div className={"title"}>{item.name}</div>
            <div className={"text"}>{formatTime(item.time)}</div>
          </div>
          <div className={"text"}>+2000 сом</div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
