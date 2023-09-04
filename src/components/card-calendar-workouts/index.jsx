import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import Icon from "../icon";
import "./style.scss";
import authStore from "../../store/auth";
import moment from "moment";

import { getAppointments } from "../../api";
import listAppointments from "../../store/getAppointments";
import { observer } from "mobx-react";
const CardCalendarWorkouts = observer(() => {
  const [showMenu, setShowMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const today = moment();
  let workouts = [];
  if (listAppointments.appointments) {
    workouts = listAppointments.appointments
      .filter((workout) =>
        moment(workout.startOfAppointment).isSameOrAfter(today)
      )
      .sort((a, b) =>
        moment(a.startOfAppointment).diff(moment(b.startOfAppointment))
      );
  }

  const handleClick = (id) => {
    setShowMenu(showMenu === id ? null : id);
  };

  if (isLoading)
    return (
      <div className={"flex flex-column gap-20"}>
        <Spin />
      </div>
    );

  return (
    <div className={"flex flex-column gap-20 card_calendar_workouts"}>
      {workouts.map((item, id) => (
        <div className={"card content"} key={id}>
          <div className="right_conor" onClick={() => handleClick(id)}>
            ...
          </div>
          {showMenu === id && (
            <div className="menu">
              <button onClick={() => console.log("Перенести")}>
                Перенести
              </button>
              <button onClick={() => console.log("Отменить")}>Отменить</button>
              <button onClick={() => console.log("Начать")}>Начать</button>
            </div>
          )}
          <div className={"flex gap-5 alignC "}>
            <Icon name={"small_calendar"} />
            <div className="text">
              {moment(item.startOfAppointment).format("HH:mm")}-
              {moment(item.endOfAppointment).format("HH:mm")}
            </div>
          </div>
          <div className="text">Тренировка с {item.clientName}</div>
          <div className="text">
            {item.type} Тренировка{" "}
            {moment(item.startOfAppointment).format("D MMMM")}
          </div>
        </div>
      ))}

      {workouts.length >= 0 && <div className={"text"}>Нет событий</div>}
    </div>
  );
});

export default CardCalendarWorkouts;
