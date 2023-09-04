import React, { useState } from "react";
import { Input, Spin } from "antd";
import Icon from "../icon";
import listUsers from "../../store/listUsers";
import { NavLink } from "react-router-dom";
import Avatar from "../avatar";
import "./style.scss";
import { observer } from "mobx-react";
import TabCircle from "../tab-circle";
const ClientList = observer((props) => {
  const { mode, multi } = props;
  const [search, setSearch] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);

  let filteredList = [];

  const handleClientClick = (item) => {
    if (mode === "display") {
    } else if (mode === "select") {
      if (selectedClients.includes(item.id)) {
        setSelectedClients((prev) =>
          prev.filter((clientId) => clientId !== item.id)
        );
      } else {
        if (multi) {
          setSelectedClients((prev) => [...prev, item.id]);
        } else {
          setSelectedClients([item.id]);
        }
      }
    }
  };
  if (listUsers.users) {
    filteredList = listUsers.users.filter((item) =>
      item.userName?.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (listUsers.usersLoading) return <Spin />;
  return (
    <div className={"client_list"}>
      <Input
        prefix={<Icon name={"search"} />}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {listUsers.usersLoading && <Spin />}
      {!listUsers.usersLoading &&
        filteredList.map((item, id) => (
          <div
            key={id}
            onClick={() => handleClientClick(item)}
            className={`card_client ${mode === "select" ? "select_mode" : ""} ${
              selectedClients.includes(item.id) ? "selected" : ""
            }`}
          >
            {mode === "display" && (
              <NavLink to={`/client/${item.id}`} className="nav">
                <Avatar />
                <div>
                  <div className="title">{item.userName}</div>
                  <div className="text">item.place</div>
                </div>
              </NavLink>
            )}
            {mode === "select" && (
              <>
                <div className={"flex alignC gap-10"}>
                  <Avatar />
                  <div>
                    <div className="title">{item.userName}</div>
                    <div className="text">item.place</div>
                  </div>
                </div>
                {selectedClients.includes(item.id) && <Icon name="check" />}
              </>
            )}
          </div>
        ))}
    </div>
  );
});

export default ClientList;
