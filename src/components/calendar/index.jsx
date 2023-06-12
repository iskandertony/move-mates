import React, { useEffect, useMemo, useState } from "react";
import { Calendar } from "react-calendar";
import moment from "moment";

import Icon from "../icon";
import authStore from "../../store/auth";
import { getAppointments } from "../../api";

import "moment/locale/ru";
import "react-calendar/dist/Calendar.css";
import "./style.scss";
import listAppointments from "../../store/getAppointments";
import { observer } from "mobx-react";
const MyCalendar = observer(() => {
  const [date, setDate] = React.useState(new Date());
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [slots, setSlots] = useState({});

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

  // function tileClassName({ date }) {
  //   const formatDate = moment(date).format("YYYY-MM-DD");
  //   if (trainings.includes(formatDate)) {
  //     return "highlight";
  //   }
  // }

  // const tileDisabled = (props) => {
  //     const { date, view } = props
  //     if (view !== 'month') {
  //         return false
  //     }
  //     if (slotsLoading || !slots[date.getMonth()]) {
  //         return true
  //     }
  //     return !slots[date.getMonth()][date.getDate()]?.length
  // }

  console.log("train?", trainings);

  return (
    <div className="schedule">
      <Calendar
        startAccessor="start"
        endAccessor="end"
        // tileDisabled={tileDisabled}
        date={date}
        locale="ru-RU"
        // tileClassName={tileClassName}
        tileContent={listAppointments.appointments && tileContent}
        // maxDate={new Date(new Date().setDate(new Date().getDate() + 14))} todo это при броне
        // minDate={new Date(new Date().setDate(new Date().getDate()))}
      />
    </div>
  );
});

export default MyCalendar;
