import React, { useMemo, useState } from "react";
import { Calendar } from "react-calendar";
import moment from "moment";

import Icon from "../icon";

import "moment/locale/ru";
import "./style.scss";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [slots, setSlots] = useState({});
  const trainings = ["2023-05-30", "2023-06-01"].map((date) =>
    moment(date).format("YYYY-MM-DD")
  );

  function tileContent({ date, view }) {
    const formatDate = moment(date).format("YYYY-MM-DD");
    if (trainings.includes(formatDate)) {
      return <div style={{ color: "red" }}>•</div>;
    }
  }
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
  return (
    <div className=" schedule">
      <Calendar
        startAccessor="start"
        endAccessor="end"
        // tileDisabled={tileDisabled}
        date={date}
        locale="ru-RU"
        tileContent={tileContent}
        // maxDate={new Date(new Date().setDate(new Date().getDate() + 14))} todo это при броне
        // minDate={new Date(new Date().setDate(new Date().getDate()))}
      />
    </div>
  );
};

export default MyCalendar;
