import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";

import { Button } from "antd";
import "./style.scss";
import MyCalendar from "../../../components/calendar";
import Names from "../../../components/names";
import CustomInput from "../../../components/input";
import { useNavigate } from "react-router-dom";
import CalendarTime from "../../../components/calendar-time";

const TimetableWorkHoursCalendarClient = observer(() => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/client/reservation");
  };

  return (
    <div className="container_mobile flex time_table_work_hours_calendar flex-column gap-20 back_ground">
      <Names title={"Назад"} name={"Выходные дни"} />

      <MyCalendar />

      <div className={"time_table_work_hours_calendar_content"}>
        <CustomInput text={"Бронировать наперед"} onClick={handleNav} />
        <CalendarTime />
      </div>

      <Button className={"button_done"}>Выбрать</Button>
    </div>
  );
});

export default TimetableWorkHoursCalendarClient;
