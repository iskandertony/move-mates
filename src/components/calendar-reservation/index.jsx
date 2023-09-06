import React, { useState } from "react";

import "./style.scss";
import CalendarTime from "../calendar-time";
import MyCalendar from "../calendar";
import {Button} from "antd";

const CalendarReservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  const saveAppointment = () => {
    if (selectedDate && selectedTime) {
      setSelectedAppointments([
        ...selectedAppointments,
        { date: selectedDate, time: selectedTime },
      ]);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  return (
    <div className={"calendar_reservation"}>
      <MyCalendar setSelectedDate={setSelectedDate} />
      <CalendarTime setSelectedTime={setSelectedTime} />
      <Button onClick={saveAppointment}>Сохранить</Button>
      <div>
        {selectedAppointments.map((appointment, index) => (
          <div key={index}>
            {appointment.date} в {appointment.time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarReservation;
