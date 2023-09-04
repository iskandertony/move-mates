import React, { useEffect, useRef, useState } from "react";
import {
  format,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
} from "date-fns";
import moment from "moment";
import "./style.scss";

const CalendarWeek = (props) => {
  const { onDayClick, selectedDate } = props;
  const start = startOfWeek(startOfMonth(new Date()), { weekStartsOn: 1 });
  const end = endOfMonth(new Date());
  const month = eachDayOfInterval({ start, end });
  const [selectedDay, setSelectedDay] = useState(moment().format("YYYY-MM-DD"));
  const todayRef = useRef();
  const today = moment().format("YYYY-MM-DD");

  useEffect(() => {
    if (todayRef.current) {
      setTimeout(() => {
        todayRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }, 0);
    }
  }, []);

  useEffect(() => {
    setSelectedDay(selectedDate);
  }, [selectedDate]);

  const handleDayClick = (dayStr) => {
    setSelectedDay(dayStr);
    onDayClick(dayStr);
  };

  return (
    <div className="calendar">
      {month.map((day, index) => {
        const dayStr = moment(day).format("YYYY-MM-DD");
        const isSelected = dayStr === selectedDay;
        const isCurrent = dayStr === today;
        let className = "calendar-day";
        if (isSelected || (isCurrent && !selectedDay)) {
          //TODO переписать код выглядит плохо
          className += " selected";
        }
        return (
          <div
            key={index}
            className={className}
            onClick={() => handleDayClick(dayStr)}
            ref={isToday(day) ? todayRef : null}
          >
            <div className="calendar-day-number">{format(day, "d")}</div>
            <div className="calendar-day-name">{format(day, "EEE")}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarWeek;
