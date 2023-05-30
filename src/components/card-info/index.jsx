import React from "react";
import Icon from "../icon";
import "./style.scss";
const CardInfo = () => {
  const info = [
    {
      name: "Айдай",
      status: "Подтверждено",
      level: "Начинающий",
      time: `09:00-10:00`,
      soon: "Скоро",
      format: "Онлайн",
      calendar: "Понед,16 мая",
    },
    {
      name: "Иска",
      status: "Подтверждено",
      level: "Начинающий",
      time: `09:00-10:00`,
      soon: "Скоро",
      format: "Онлайн",
      calendar: "Понед,16 мая",
    },
  ];
  return (
    <div className="card_info">
      {info.map((item) => (
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
            <div className="card_item">
              <Icon name={"location"} className={"icon"} />
              <div>{item.format}</div>
            </div>
            <div className="card_item_status">
              <div>Статус:</div>
              <div>{item.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
