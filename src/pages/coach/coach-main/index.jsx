import React, { useState } from "react";
import { observer } from "mobx-react";
import moment from "moment";

import Header from "../../../components/header";
import CardInfo from "../../../components/card-info";
import CalendarWeek from "../../../components/calendar-week";
import CardStatistics from "../../../components/statistics";
import userStore from "../../../store/user";

import "./style.scss";
import Footer from "../../../components/footer";
import Tab from "../../../components/tab";

const CoachMain = observer(() => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const currentMonth = moment().format("MMMM");

  return (
    <div className="main back_ground container_mobile">
      <Header />
      <div className="name">Доброе утро, {userStore.user?.userName}</div>
      <div className="name">{currentMonth}</div>
      <CalendarWeek onDayClick={setSelectedDate} selectedDate={selectedDate} />

      <Tab
        name={"Тренировки"}
        subName={"Действия"}
        content={<CardInfo selectedDate={selectedDate} />}
        subContent={<CardStatistics />}
      />
    </div>
  );
});

export default CoachMain;
