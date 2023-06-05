import React, { useEffect, useState } from "react";

import { Input } from "antd";
import Icon from "../../components/icon";
import { NavLink } from "react-router-dom";
import "./style.scss";
import authStore from "../../store/auth";
import moment from "moment";
import { getClientsList } from "../../api";
import Hamburger from "../../components/hamburger";

const ClientList = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const today = moment();

  useEffect(() => {
    const fetchData = async () => {
      if (authStore.token) {
        const filter = {
          from: moment(today).toISOString(),
          size: 3,
          page: 0,
        };
        try {
          const response = await getClientsList(filter);
          console.log("response", response);
          setList(response.content);
        } catch (error) {
          console.log("error", error);
        }
      }
    };

    fetchData();
  }, []);

  const filteredList = list.filter((item) =>
    item.userName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"back_ground client container_mobile"}>
      <div className={"flex alignC justify-s"}>
        <Hamburger />
        <div className="name m-0">Ваши клиенты</div>
      </div>

      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredList.map((item) => (
        <NavLink to={`/client/${item.id}`} className="nav">
          <div className="card_client">
            <div>
              <Icon name={"big_calendar"} />
            </div>
            <div>
              <div className="title">{item.userName}</div>
              <div className="text">{item.level}</div>
              <div className="text">{item.time}</div>
            </div>
            <div>
              <div className="title">Осталось {item.size} тренировки</div>
              <div className="text">{item.place}</div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ClientList;
