import React, { useState } from "react";
import { observer } from "mobx-react";
import moment from "moment";

import Header from "../../components/header";
import CardInfo from "../../components/card-info";
import CalendarWeek from "../../components/calendar-week";
import CardStatistics from "../../components/statistics";
import CardInvite from "../../components/card-invite";
import userStore from "../../store/user";

import "./style.scss";

const CoachMain = observer(() => {
  const [activityStatus, setActivityStatus] = useState("Предстоящие");
  const [selectedDate, setSelectedDate] = useState(null);
  const currentMonth = moment().format("MMMM");
  const tabs = ["Предстоящие", "Запросы", "Действия"];

  const renderContent = () => {
    switch (activityStatus) {
      case "Предстоящие":
        return <CardInfo selectedDate={selectedDate} />;
      case "Запросы":
        return <CardInvite />;
      case "Действия":
        return <CardStatistics />;
      default:
        return null;
    }
  };
  return (
    <div className="main back_ground container_mobile">
      <Header />
      <div className="name">Доброе утро, {userStore.user?.userName}</div>
      <div className="name">{currentMonth}</div>
      <CalendarWeek onDayClick={setSelectedDate} selectedDate={selectedDate} />

      <div className="flex tabs background-color gap-10 justify-s">
        {tabs.map((tab,index) => (
            <div
                key={index}
                className={`title ${activityStatus === tab ? "active" : ""}`}
                onClick={() => setActivityStatus(tab)}
            >
                {tab}
            </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
});

export default CoachMain;
