import React, { useEffect, useState } from "react";
import Icon from "../icon";
import "./style.scss";
import authStore from "../../store/auth";
import moment from "moment";
import { getAppointments } from "../../api";
const CardCalendarWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showMenu, setShowMenu] = useState(null);
  const today = moment();


  useEffect(() => {
    const fetchData = async () => {
      if (authStore.token) {
        const filter = {
          from: moment(today).startOf("day").toISOString(),
          size: 20,
          page: 0,
        };
        try {
          const response = await getAppointments(filter);
          const sortedWorkouts = response.content
            .filter((workout) =>
              moment(workout.startOfAppointment).isSameOrAfter(today)
            )
            .sort((a, b) =>
              moment(a.startOfAppointment).diff(moment(b.startOfAppointment))
            );
          setWorkouts(sortedWorkouts);
        } catch (error) {
          console.log("error", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    setShowMenu(showMenu === id ? null : id);
  };
  return (
    <div className={"flex flex-column gap-20"}>
      {workouts.map((item, id) => (
        <div className={"card card_calendar_workouts"}>
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
    </div>
  );
};

export default CardCalendarWorkouts;
