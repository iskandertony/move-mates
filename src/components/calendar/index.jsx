import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ru";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style.scss";
import Icon from "../icon";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="container_mobile">
      <div className="header">
        <Icon
          name={"arrow_left"}
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}
        />

        <div className="date-display">{moment(date).format("MMMM YYYY")}</div>

        <Icon
          name={"arrow_rigth"}
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}
        />
      </div>

      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
        toolbar={false}
        date={date}
        onNavigate={handleNavigate}
        style={{ height: 500, border: "none" }}
      />
    </div>
  );
};

export default MyCalendar;
