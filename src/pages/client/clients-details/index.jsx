import React, { useEffect, useState } from "react";
import "./style.scss";
import Icon from "../../../components/icon";
import CardUserInfo from "../../../components/card-user-info";
import ArrowBack from "../../../components/arrow-back";
import { getClient } from "../../../api";
import { useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Names from "../../../components/names";
import Avatar from "../../../components/avatar";
import Tab from "../../../components/tab";
import CardInfo from "../../../components/card-info";
import CardStatistics from "../../../components/statistics";

const ClientDetails = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);
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

  useEffect(() => {
    const fetchClientData = async () => {
      if (id) {
        const response = await getClient(id);
        setClientData(response);
      }
    };

    fetchClientData();
  }, [id]);

  const upcomingTraining = train
    .filter((t) => t.date > new Date())
    .sort((a, b) => a.date - b.date)[0];

  return (
    <div className="client_details container_mobile back_ground">
      <div>
        <Names title={"Клиенты"} name={"Профиль клиента"} />
        <div className="flex alignC justify-c flex-column gap-5">
          <Avatar />
          <div className="name">{clientData?.name}</div>
          <div>Клиент</div>
        </div>
      </div>

      <CardUserInfo
        weight={clientData?.weight}
        height={clientData?.height}
        gender={clientData?.gender}
        dateOfBirth={clientData?.dateOfBirth}
      />

      <div className={"info"}>
        <div className={"title"}>Обо мне</div>
        <TextArea placeholder="Description" />
      </div>

      <Tab
        name={"Предстоящие"}
        subName={"Прошедшие"}
        content={
          <div className="content">
            {train.map((item, id) => (
              <div className="card_clien_content card" key={id}>
                <div className="flex gap-10 alignC">
                  <Icon name={"calendar"} />{" "}
                  <div className="text">{item.type} Traning</div>
                </div>
                <div className="flex gap-5">
                  <div className="title">
                    {item.date.toLocaleDateString()} |
                  </div>
                  <div className="title">{item.time} |</div>{" "}
                  <div className="title">{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        }
        subContent={
          <div className="content">
            {train.map((item, id) => (
              <div className="card_clien_content card" key={id}>
                <div className="flex gap-10 alignC">
                  <Icon name={"calendar"} />{" "}
                  <div className="text">{item.type} Traning</div>
                </div>
                <div className="flex gap-5">
                  <div className="title">
                    {item.date.toLocaleDateString()} |
                  </div>
                  <div className="title">{item.time} |</div>{" "}
                  <div className="title">{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default ClientDetails;
