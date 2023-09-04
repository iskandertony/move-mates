import React, { useEffect, useMemo, useState } from "react";
import { Calendar } from "react-calendar";
import moment from "moment";

import "moment/locale/ru";
import "react-calendar/dist/Calendar.css";
import "./style.scss";
import listAppointments from "../../store/getAppointments";
import { observer } from "mobx-react";
const MyCalendar = observer((props) => {
  const [date, setDate] = useState(new Date());
  const { onDateChange, setSelectedDate } = props;
  let trainings = [];

  function tileContent({ date }) {
    if (listAppointments.appointments) {
      trainings = listAppointments.appointments.map((item) =>
        moment(item.startOfAppointment).format("YYYY-MM-DD")
      );
      const formatDate = moment(date).format("YYYY-MM-DD");
      if (trainings.includes(formatDate)) {
        return (
          <div className={"dot"}>
            <p>•</p>
          </div>
        );
      }
    }
  }

  return (
    <div className="schedule">
      <Calendar
        startAccessor="start"
        endAccessor="end"
        date={date}
        locale="ru-RU"
        onChange={(newDate) => {
          if (onDateChange) {
            onDateChange(newDate);
          }
        }}
        tileContent={listAppointments.appointments && tileContent}
      />
    </div>
  );
});

export default MyCalendar;
