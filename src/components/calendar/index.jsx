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
    <div className=" schedule">
      <div className="header">
        <Icon
          className={"arrow"}
          name={"arrow_left"}
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}
        />

        <div className="date-display">
          <p className="name">{moment(date).format("MMMM ")}</p>
          <p className="title">{moment(date).format(" YYYY")}</p>
        </div>

        <Icon
          className={"arrow"}
          name={"arrow_rigth"}
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}
        />
      </div>

      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
        // components={{
        //     day: ColoredDateCellWrapper,
        // }}
        toolbar={false}
        date={date}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default MyCalendar;
