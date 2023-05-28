import React, { useState } from "react";

import { Input } from "antd";
import Icon from "../../components/icon";
import { NavLink } from "react-router-dom";
import "./style.scss";

const ClientList = () => {
  const [search, setSearch] = useState("");
  const list = [
    {
      name: "Айдай",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
      id: 1,
    },
    {
      name: "Куб байке",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
      id: 2,
    },
    {
      name: "Калмурат",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
    {
      name: "Айдай",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
    {
      name: "Куб байке",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
    {
      name: "Калмурат",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
    {
      name: "Айдай",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
    {
      name: "Куб байке",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
    {
      name: "Калмурат",
      level: "Начинающий",
      time: "Вт-Чт-Сб",
      place: "Бишкек, Кыргызстан",
      count: "3",
    },
  ];
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"back_ground client container_mobile"}>
      <div className="name">Ваши клиенты</div>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredList.map((item) => (
        <NavLink to={`/client/${item.id}`} className="nav">
          <div className="card_client">
            <div>
              <Icon name={"big_calendar"} />
            </div>
            <div>
              <div className="title">{item.name}</div>
              <div className="text">{item.level}</div>
              <div className="text">{item.time}</div>
            </div>
            <div>
              <div className="title">Осталось {item.count} тренировки</div>
              <div className="text">{item.place}</div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ClientList;
