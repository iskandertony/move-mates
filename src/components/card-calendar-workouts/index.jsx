import React, { useEffect, useState } from "react";
import Icon from "../icon";
import "./style.scss";
import authStore from "../../store/auth";
import moment from "moment";
import { getAppointments } from "../../api";
const CardCalendarWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const today = moment();
  useEffect(() => {
    const fetchData = async () => {
      if (authStore.token) {
        const filter = {
          from: moment(today).toISOString(),
          size: 3,
          page: 0,
        };
        try {
          const response = await getAppointments(filter);
          setWorkouts(response.content);
        } catch (error) {
          console.log("error", error);
        }
      }
    };

    fetchData();
  }, []);
  return (
    <div className={"flex flex-column gap-20"}>
      {workouts.map((item) => (
        <div className={"card card_calendar_workouts"}>
          <div className="right_conor">...</div>
          <div className={"flex gap-5 alignC "}>
            <Icon name={"small_calendar"} />
            <div className="text">
              {moment(item.startOfAppointment).format("HH:mm")}-
              {moment(item.endOfAppointment).format("HH:mm")}
            </div>
          </div>
          <div className="text">
            Тренировка с {item.clientName}
          </div>
          <div className="text">{item.type} Тренировка</div>
        </div>
      ))}
    </div>
  );
};

export default CardCalendarWorkouts;
