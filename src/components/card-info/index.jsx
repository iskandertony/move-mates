import React from "react";
import Icon from "../icon";
import "./style.scss";
import { Button } from "antd";
import moment from "moment";
const CardInfo = (props) => {
  const { selectedDate } = props;
  const info = [
    {
      name: "Айдай",
      status: "Подтверждено",
      level: "Начинающий",
      time: `09:00-10:00`,
      soon: "Скоро",
      format: "Онлайн",
      calendar: "2023-05-16",
    },
    {
      name: "Иска",
      status: "Подтверждено",
      level: "Начинающий",
      time: `09:00-10:00`,
      soon: "Скоро",
      format: "Онлайн",
      calendar: "2023-05-30",
    },
    {
      name: "Куб",
      status: "Подтверждено",
      level: "Начинающий",
      time: `09:00-10:00`,
      soon: "Скоро",
      format: "Онлайн",
      calendar: "2023-05-29",
    },
  ];

  const today = moment().startOf("day");
  let filteredCards = info;

  if (selectedDate) {
    if (moment(selectedDate).isSame(today)) {
      filteredCards = info;
    } else {
      filteredCards = info.filter((item) =>
        moment(item.calendar).isSame(selectedDate, "day")
      );
    }
  }

  filteredCards.sort((a, b) => moment(b.calendar).diff(moment(a.calendar)));
  return (
    <div className="card_info">
      {filteredCards.map((item) => (
        <div className="card_info_container">
          <div className="card_info_status right_conor">{item.soon}</div>
          <div className="card_info_info">
            <Icon name={"big_profile"} className="profile" />

            <div className="text">
              <div className="name">{item.name}</div>
              <div className="flex gap-5">
                <div className="level">{item.level}</div>
                <div className="level">{item.format}</div>
                <div className="level">{item.status}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card_item">
              <Icon name={"small_calendar"} />
              <div>{item.calendar}</div>
            </div>
            <div className="card_item">
              <Icon name={"clock"} />
              <div>{item.time}</div>
            </div>
            <Button>Начать тренировку</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
