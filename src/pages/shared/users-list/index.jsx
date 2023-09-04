import React from "react";
import { observer } from "mobx-react";

import "./style.scss";
import ClientList from "../../../components/client-list";
import userStore from "../../../store/user";
import MentorList from "../../mentor-list";

const Clients = observer(() => {
  return (
    <div className={"back_ground client container_mobile"}>
      {/*<div className="name m-0x">*/}
      {/*  {userStore.role === "coach" ? "Ваши клиенты" : "Специалисты"}*/}
      {/*</div>*/}
      {userStore.role === "coach" ? (
        <ClientList mode={"display"} />
      ) : (
        <MentorList name={"Специалисты"} mode={"display"} />
      )}
    </div>
  );
});

export default Clients;
