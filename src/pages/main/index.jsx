import React, { useState } from "react";

import Header from "../../components/header";
import moment from "moment";
import CardInfo from "../../components/card-info";
import CalendarWeek from "../../components/calendar-week";
import CardStatistics from "../../components/statistics";
import CardInvite from "../../components/card-invite";

import "./style.scss";
import userStore from "../../store/user";

const Main = () => {
  const [activityStatus, setActivityStatus] = useState("Предстоящие");
  const currentMonth = moment().format("MMMM");
  const tabs = ["Предстоящие", "Запросы", "Действия"];

  const renderContent = () => {
    switch (activityStatus) {
      case "Предстоящие":
        return <CardInfo />;
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
      <CalendarWeek />

      <div className="flex card background-color gap-10 justify-s">
        {tabs.map((tab) => (
          <div
            className={`card title ${activityStatus === tab ? "active" : ""}`}
            onClick={() => setActivityStatus(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default Main;
