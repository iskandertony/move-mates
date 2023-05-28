import React from "react";
import "./style.scss";
import Icon from "../../components/icon";
import CardUserInfo from "../../components/card-user-info";

const ClientDetails = () => {
  const currentYear = new Date().getFullYear();
  const train = [
    {
      date: new Date(`May 22, ${currentYear}`),
      time: "10:00 утра",
      status: "Онлайн",
      type: "Hiit",
    },
    {
      date: new Date(`May 14, ${currentYear}`),
      time: "10:00 утра",
      status: "Онлайн",
      type: "Hiit",
    },
    {
      date: new Date(`May 1, ${currentYear}`),
      time: "10:00 утра",
      status: "Gym",
      type: "Gym",
    },
    {
      date: new Date(`May 25, ${currentYear}`),
      time: "10:00 утра",
      status: "Yoga",
    },
  ];

  // Find the upcoming training
  const upcomingTraining = train
    .filter((t) => t.date > new Date())
    .sort((a, b) => a.date - b.date)[0];

  return (
    <div className="client_details container_mobile back_ground">

      <div>
        <div className="flex alignC justify-c flex-column gap-5">
          <Icon name={"big_calendar"} />
          <div className="name">Айдай</div>
          <div className="text">Средний</div>
        </div>

        {upcomingTraining && (
          <div className={"card card_clien_content"}>
            <div className="flex gap-10 alignC">
              <Icon name={"calendar"} />
              <div className="text">Ближайшая тренировка</div>
            </div>
            <div className="flex gap-5 ">
              <div className="title">
                {upcomingTraining.date.toLocaleDateString()} |
              </div>
              <div className="title">{upcomingTraining.time} |</div>
              <div className="title">{upcomingTraining.status}</div>
            </div>
          </div>
        )}
      </div>

      <div className="content">
        <div>Тренировки на этой неделе</div>
        {train.map((item) => (
          <div className="card_clien_content card">
            <div className="flex gap-10 alignC">
              <Icon name={"calendar"} />{" "}
              <div className="text">{item.type} Traning</div>
            </div>
            <div className="flex gap-5">
              <div className="title">{item.date.toLocaleDateString()} |</div>
              <div className="title">{item.time} |</div>{" "}
              <div className="title">{item.status}</div>
            </div>
          </div>
        ))}
        <div className="title">Осталось 5 тренировок</div>
      </div>

       <CardUserInfo/>

    </div>
  );
};

export default ClientDetails;
