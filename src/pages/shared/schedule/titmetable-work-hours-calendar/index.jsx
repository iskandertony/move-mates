import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import Names from "../../../../components/names";
import MyCalendar from "../../../../components/calendar";
import { Button } from "antd";
import "./style.scss";
import CalendarTime from "../../../../components/calendar-time";

const TimetableWorkHoursCalendarMentor = observer(() => {



  return (
    <div className="container_mobile flex time_table_work_hours_calendar flex-column gap-20 back_ground">
      <div className={"flex alignC gap-20"}>
        <Names name={"Выходные дни"} />
      </div>
      <MyCalendar />

      <CalendarTime />

      <Button className={"button_done"}>Выбрать</Button>
    </div>
  );
});

export default TimetableWorkHoursCalendarMentor;
