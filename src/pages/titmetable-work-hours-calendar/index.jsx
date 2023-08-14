import React from "react";

import ArrowBack from "../../components/arrow-back";
import CalendarBooking from "../../components/calendar-booking";
import { observer } from "mobx-react";
import Names from "../../components/names";

const TimetableWorkHoursCalendar = observer(() => {
  return (
    <div className={"container_mobile flex flex-column gap-20 back_ground"}>
      <div className={"flex alignC gap-20"}>
        <Names name={"Выходные дни"} />
      </div>
      <CalendarBooking />
    </div>
  );
});

export default TimetableWorkHoursCalendar;
