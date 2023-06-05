import React from "react";
import ArrowBack from "../../components/arrow-back";
import Icon from "../../components/icon";

const Notifications = () => {
  const arr = [
    {
      text: "У вас запланирована Hiit в 10:00 утра с Кириллом.У вас запланирована Hiit в 10:00 утра с Кириллом.",
      type: "Тренировка",
    },
    {
      text: "У вас запланирована Hiit в 10:00 утра с Кириллом.У вас запланирована Hiit в 10:00 утра с Кириллом.",
      type: "Тренировка",
    },
    {
      text: "У вас запланирована Hiit в 10:00 утра с Кириллом.У вас запланирована Hiit в 10:00 утра с Кириллом.",
      type: "Тренировка",
    },
  ];
  return (
    <div className={"container_mobile pt-20 back_ground"}>
      <div className={"flex alignC gap-20 "}>
        <ArrowBack />
        <div>Уведомление</div>
      </div>
      <div className={"flex flex-column gap-10"}>
        {arr.map((item) => (
          <div className={"card flex alignC gap-5"}>
            <Icon name={"big_calendar"} />
            <div>
              <div className="title">{item.type}</div>
              <div className={"text"}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
