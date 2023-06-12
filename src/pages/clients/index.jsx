import React, { useState } from "react";
import { observer } from "mobx-react";
import {Input, Spin} from "antd";

import Icon from "../../components/icon";
import { NavLink } from "react-router-dom";
import Hamburger from "../../components/hamburger";
import listUsers from "../../store/listUsers";


import "./style.scss";

const ClientList = observer(() => {
  const [search, setSearch] = useState("");

  let filteredList = [];

  if (listUsers.users) {
    filteredList = listUsers.users.filter((item) =>
      item.userName?.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (listUsers.usersLoading) return <Spin/>

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
        {listUsers.usersLoading && <Spin/>}
      {!listUsers.usersLoading && filteredList.map((item, id) => (
        <NavLink key={id} to={`/client/${item.id}`} className="nav">
          <div className="card_client" >
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
});

export default ClientList;
