import React, { useState } from "react";
import MyCalendar from "../../components/calendar";
import "./style.scss";
import CardAdd from "../../components/card-add";
import CardCalendarWorkouts from "../../components/card-calendar-workouts";
import ModalWrapper from "../../components/modal-wrapper";
const Schedule = () => {
  const [shown, setShown] = useState(false);
  return (
    <div className="container_mobile back_ground flex flex-column gap-20">
      <MyCalendar />
      <CardAdd
        title={"Добавьте новую встречу"}
        text={"Вы можете добавить новую встречу/событие здесь."}
        onClick={() => setShown(true)}
      />
      <CardCalendarWorkouts />
    </div>
  );
};

export default Schedule;
