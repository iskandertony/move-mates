import React, { useState } from "react";
import MyCalendar from "../../components/calendar";
import "./style.scss";
import CardAdd from "../../components/card-add";
import CardCalendarWorkouts from "../../components/card-calendar-workouts";

import ModalCalendar from "../../components/modal-wrapper-calendar";
import CalendarAddEvent from "../../components/calendar-add-event";
const Schedule = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="container_mobile back_ground flex flex-column gap-20">
        <MyCalendar />
        <CardAdd
          title={"Добавьте новую встречу"}
          text={"Вы можете добавить новую встречу/событие здесь."}
          onClick={() => setShow(true)}
        />
        <CardCalendarWorkouts />
      </div>
      <ModalCalendar
        show={show}
        setShow={setShow}
        children={<CalendarAddEvent setShow={setShow} />}
      />
    </>
  );
};

export default Schedule;
