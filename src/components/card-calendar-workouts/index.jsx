import React from "react";
import Icon from "../icon";
import "./style.scss";
const CardCalendarWorkouts = () => {
  const arr = [
    {
      name: "Айдай",
      location: "зал",
      type: "Груповая",
      time: "14:00-15:00",
    },
    {
      name: "Айдай Айдай",
      location: "спортзал",
      type: "Силовая",
      time: "14:00-15:00",
    },
  ];
  return (
    <div className={"flex flex-column gap-20"}>
      {arr.map((item) => (
        <div className={"card card_calendar_workouts"}>
          <div className="right_conor">...</div>
          <div className={"flex gap-5 alignC "}>
            <Icon name={"small_calendar"} />
            <div className="text">{item.time}</div>
          </div>
          <div className="text">
            {item.type} тренировка с {item.name}
          </div>
          <div className="text">{item.location}</div>
        </div>
      ))}
    </div>
  );
};

export default CardCalendarWorkouts;
