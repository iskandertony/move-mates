import React, { useState } from "react";
import MyCalendar from "../../../components/calendar";
import "./style.scss";
import CardAdd from "../../../components/card-add";
import CardCalendarWorkouts from "../../../components/card-calendar-workouts";
import { useNavigate } from "react-router-dom";
const Schedule = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mentor/calendar/event");
  };
  return (
    <>
      <div className="container_mobile back_ground_white flex flex-column gap-20 schedule">
        <MyCalendar />
        <CardAdd title={"Добавить тренировку"} onClick={handleClick} />
        <CardCalendarWorkouts />
      </div>
    </>
  );
};

export default Schedule;
