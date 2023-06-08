import React, { useEffect, useMemo, useState } from "react";
import { Calendar } from "react-calendar";
import moment from "moment";

import Icon from "../icon";

import "moment/locale/ru";
import "./style.scss";
import "react-calendar/dist/Calendar.css";
import authStore from "../../store/auth";
import { getAppointments } from "../../api";

const MyCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [slots, setSlots] = useState({});
  const [trainings, setTrainings] = useState([]);
  const today = moment();

  useEffect(() => {
    const fetchData = async () => {
      if (authStore.token) {
        const filter = {
          from: moment(today).toISOString(),
          size: 20,
          page: 0,
        };
        try {
          const response = await getAppointments(filter);
          const trainingDates = response.content.map((item) =>
            moment(item.startOfAppointment).format("YYYY-MM-DD")
          );
          setTrainings(trainingDates);
        } catch (error) {
          console.log("error", error);
        }
      }
    };

    fetchData();
  }, []);

  function tileContent({ date }) {
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
